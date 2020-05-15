import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
	selector: 'app-dimmer',
	templateUrl: './dimmer.component.html',
	styleUrls: ['./dimmer.component.css']
})
export class DimmerComponent implements OnInit {

	percentage = 0;
	rangeMax = 254;
	rangeMin = 1;

	@Input() brightness;
	@Input() id;

	@Output() brightnessChanged = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	changeHandler(value): void {
		this.updateBrightness(value);
		const event = {
			brightness: this.brightness,
			id: this.id,
			percentage: this.percentage,
			source: 'DimmerComponent',
			type: 'BrightnessChangedEvent',
		};
		this.brightnessChanged.emit(event);
	}

	updateBrightness(value): void {
		this.brightness = value;
	}

	// Visuals
	getRangeBarCSS(): string {
		this.calcFillPercentage();
		return this.getGradientString();
	}

	getGradientString(): string {
		return `linear-gradient(0deg, rgb(${this.brightness},${this.brightness},${this.brightness}) ${this.percentage}%, rgb(25,25,25) ${this.percentage}%)`;
	}

	calcFillPercentage(): void {
		this.percentage = (this.brightness / this.rangeMax) * 100;
	}

}

