import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';

import iro from '@jaames/iro';

export interface ColorChangeEvent {
	color: {
		rgb: any;
		hsv: any;
	};
	id: number;
	source: string;
	type: string;
}
@Component({
	selector: 'app-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

	colorPicker: any = null;
	hexColor: any = null;
	hsvColor: any = null;
	rgbColor: any = null;

	@Input() id: number;

	@Output() colorChanged = new EventEmitter<ColorChangeEvent>();

	constructor(
		private readonly ngZone: NgZone
	) { }

	ngOnInit(): void {
		this.colorPicker = new iro.ColorPicker('#picker', {
			layout: [
				{
					component: iro.ui.Wheel
				}
			]
		});
		this.colorPicker.on('color:change', (color, changes) => this.ngZone.run(() => this.onColorChange(color, changes)));
	}

	onColorChange(color, changes): void {
		this.hexColor = color.hexString;
		this.hsvColor = color.hsv;
		this.rgbColor = color.rgb;

		const event: ColorChangeEvent = {
			color: { rgb: this.rgbColor, hsv: this.hsvColor },
			id: this.id,
			source: 'ColorPickerComponent',
			type: 'ColorChangedEvent',
		};
		this.colorChanged.emit(event);
	}
}
