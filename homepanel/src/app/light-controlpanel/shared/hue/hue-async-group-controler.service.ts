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
		this.hueioservice.sendGroupState(groupID, state).subscribe();
	}

	fetchHueLightStates(): void {
		this.hueioservice.fetchAllGroupStates().subscribe(states => this.states = states);
	}

	syncBrightnessChanges(): void {
		Object.keys(this.changes.brightness).forEach(key => {
			const brightness = this.changes.brightness[key];
			const message = { on: true, bri: parseInt(brightness, 10) };
			this.sendHueLightState(parseInt(key, 10), message);
		});
		this.changes.brightness = {};
	}

	syncColorChanges(): void {
		Object.keys(this.changes.color).forEach(key => {
			const color = this.changes.color[key];
			const message = { on: true, sat: color.sat, hue: color.hue };
			this.sendHueLightState(parseInt(key, 10), message);
		});
		this.changes.color = {};
	}

	sycOnChanges(): void {
		Object.keys(this.changes.on).forEach(key => {
			const on = this.changes.on[key];
			const message = { on };
			this.sendHueLightState(parseInt(key, 10), message);
		});
		this.changes.on = {};
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

	getColor(groupID: number): any {
		return {};
	}
}
