export class HueGroup {

	id;
	controller;

	constructor() { }

	// Set states
	setOn() {
		this.controller.setOn(this.id);
	}

	setOff() {
		this.controller.setOff(this.id);
	}

	setBrightness(brightness: number) {
		this.controller.setBrightness(this.id, brightness);
	}

	setColor(HSVColor: object) {
		this.controller.setColor(this.id, HSVColor);
	}

	// Get states
	getSwitchState(): number {
		return this.controller.getSwitchState(this.id);
	}

	getBrightness(): number {
		return this.controller.getBrightness(this.id);
	}

	getColor(): object {
		return this.controller.getColor(this.id);
	}
}
