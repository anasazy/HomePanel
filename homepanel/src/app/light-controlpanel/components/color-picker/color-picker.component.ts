import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';

import { iro } from '@jaames/iro/dist/iro';
declare var iro: any;

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  @Input() id;
  @Output() colorChanged = new EventEmitter();

  colorPicker = null;
  ngZone = null;

  hexColor = null;
  rgbColor = null;
  hsvColor = null;

  constructor(ngZone: NgZone) {
    this.ngZone = ngZone;
  }

  ngOnInit() {
    this.colorPicker = new iro.ColorPicker('#picker', {
      layout: [
        {
          component: iro.ui.Wheel
        }
      ]
    });
    this.colorPicker.on('color:change', (color, changes) => this.ngZone.run(() => this.onColorChange(color, changes)));
  }

  onColorChange(color, changes) {
    this.hexColor = color.hexString;
    this.hsvColor = color.hsv;
    this.rgbColor = color.rgb;

    let event = {
      color: {
        rgb: this.rgbColor,
        hsv: this.hsvColor
      },
      type: 'ColorChangedEvent',
      source: 'ColorPickerComponent',
      id: this.id
    };
    this.colorChanged.emit(event);
  }
}
