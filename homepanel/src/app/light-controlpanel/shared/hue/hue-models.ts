export class HueGroup {

	id: number;
	controller: any;

	constructor() { }

	// Set states
	setOn(): void {
		this.controller.setOn(this.id);
	}

	setOff(): void {
		this.controller.setOff(this.id);
	}

	setBrightness(brightness: number): void {
		this.controller.setBrightness(this.id, brightness);
	}

	setColor(hsvColor: any): void {
		this.controller.setColor(this.id, hsvColor);
	}

	// Get states
	getSwitchState(): number {
		return this.controller.getSwitchState(this.id);
	}

	getBrightness(): number {
		return this.controller.getBrightness(this.id);
	}

	getColor(): any {
		return this.controller.getColor(this.id);
	}
}
