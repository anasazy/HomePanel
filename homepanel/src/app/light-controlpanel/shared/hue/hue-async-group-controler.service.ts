import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

import { HueColorConverterService } from './hue-color-converter.service';
import { HueIOService } from './hue-io.service';


@Injectable({
	providedIn: 'root'
})
export class HueAsyncGroupControlerService {

	states = null;
	changes = { brightness: {}, color: {}, on: {} };
	observer = timer(2000, 5000);
	syncCheck = this.observer.subscribe(val => this.fetchHueLightStates());
	syncTimer = timer(100, 600);
	brightnessSync = this.syncTimer.subscribe(val => this.syncBrightnessChanges());
	colorSync = this.syncTimer.subscribe(val => this.syncColorChanges());
	onSync = this.syncTimer.subscribe(val => this.sycOnChanges());

	constructor(
		private readonly hueioservice: HueIOService,
		private readonly colorservice: HueColorConverterService
	) {
		this.fetchHueLightStates();
	}

	// Hue communication
	sendHueLightState(GroupID: number, state: object) {
		this.hueioservice.sendGroupState(GroupID, state);
	}

	fetchHueLightStates() {
		this.states = this.hueioservice.fetchAllGroupStates();
	}

	syncBrightnessChanges() {
		for (const id in this.changes.brightness) {
			const brightness = this.changes.brightness[id];
			const mesg = { on: true, bri: Number(brightness) };
			this.sendHueLightState(Number(id), mesg);
			delete this.changes.brightness[id];
		}
	}

	syncColorChanges() {
		for (const id in this.changes.color) {
			const color = this.changes.color[id];
			const mesg = { on: true, sat: color.sat, hue: color.hue };
			this.sendHueLightState(Number(id), mesg);
			delete this.changes.color[id];
		}
	}

	sycOnChanges() {
		for (const id in this.changes.on) {
			const on = this.changes.on[id];
			const mesg = { on };
			this.sendHueLightState(Number(id), mesg);
			delete this.changes.on[id];
		}
	}

	// Set states
	setOn(GroupID: number) {
		this.changes.on[GroupID] = true;
		this.states[GroupID].on = true;
	}

	setOff(GroupID: number) {
		this.changes.on[GroupID] = false;
		this.states[GroupID].on = false;
	}

	setBrightness(GroupID: number, brightness: number) {
		this.changes.brightness[GroupID] = brightness;
		this.states[GroupID].bri = brightness;
	}

	setColor(GroupID: number, HSVColor: object) {
		const cie = this.colorservice.hsv_to_cie(HSVColor.h, HSVColor.s, HSVColor.v);
		this.changes.color[GroupID] = cie;
		this.states[GroupID].hue = cie.hue;
		this.states[GroupID].sat = cie.sat;
	}

	// Get states
	getSwitchState(GroupID: number): number {
		return this.states[GroupID].on;
	}

	getBrightness(GroupID: number): number {
		return this.states[GroupID].bri;
	}

	getColor(GroupID: number): object {
		return {};
	}
}
