import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

import { HueColorConverterService } from './hue-color-converter.service';
import { HueIOService } from './hue-io.service';


@Injectable({
	providedIn: 'root'
})
export class HueAsyncGroupControllerService {

	changes = { brightness: {}, color: {}, on: {} };
	states = null;

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
	sendHueLightState(groupID: number, state: object): void {
		this.hueioservice.sendGroupState(groupID, state);
	}

	fetchHueLightStates(): void {
		this.states = this.hueioservice.fetchAllGroupStates();
	}

	syncBrightnessChanges(): void {
		for (const id in this.changes.brightness) {
			const brightness = this.changes.brightness[id];
			const mesg = { on: true, bri: Number(brightness) };
			this.sendHueLightState(Number(id), mesg);
			delete this.changes.brightness[id];
		}
	}

	syncColorChanges(): void {
		for (const id in this.changes.color) {
			const color = this.changes.color[id];
			const mesg = { on: true, sat: color.sat, hue: color.hue };
			this.sendHueLightState(Number(id), mesg);
			delete this.changes.color[id];
		}
	}

	sycOnChanges(): void {
		for (const id in this.changes.on) {
			const on = this.changes.on[id];
			const mesg = { on };
			this.sendHueLightState(Number(id), mesg);
			delete this.changes.on[id];
		}
	}

	// Set states
	setOn(groupID: number): void {
		this.changes.on[groupID] = true;
		this.states[groupID].on = true;
	}

	setOff(groupID: number): void {
		this.changes.on[groupID] = false;
		this.states[groupID].on = false;
	}

	setBrightness(groupID: number, brightness: number): void {
		this.changes.brightness[groupID] = brightness;
		this.states[groupID].bri = brightness;
	}

	setColor(groupID: number, hsvColor): void {
		const cie = this.colorservice.hsv2cie(hsvColor.h, hsvColor.s, hsvColor.v);
		this.changes.color[groupID] = cie;
		this.states[groupID].hue = cie.hue;
		this.states[groupID].sat = cie.sat;
	}

	// Get states
	getSwitchState(groupID: number): number {
		return this.states[groupID].on;
	}

	getBrightness(groupID: number): number {
		return this.states[groupID].bri;
	}

	getColor(groupID: number) {
		return {};
	}
}
