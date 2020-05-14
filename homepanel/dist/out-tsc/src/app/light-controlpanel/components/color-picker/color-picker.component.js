import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ColorPickerComponent = class ColorPickerComponent {
    constructor(ngZone) {
        this.colorChanged = new EventEmitter();
        this.colorPicker = null;
        this.ngZone = null;
        this.hexColor = null;
        this.rgbColor = null;
        this.hsvColor = null;
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
            "color": { "rgb": this.rgbColor, "hsv": this.hsvColor },
            "type": "ColorChangedEvent",
            "source": "ColorPickerComponent",
            "id": this.id
        };
        this.colorChanged.emit(event);
    }
};
__decorate([
    Input()
], ColorPickerComponent.prototype, "id", void 0);
__decorate([
    Output()
], ColorPickerComponent.prototype, "colorChanged", void 0);
ColorPickerComponent = __decorate([
    Component({
        selector: 'app-color-picker',
        templateUrl: './color-picker.component.html',
        styleUrls: ['./color-picker.component.css']
    })
], ColorPickerComponent);
export { ColorPickerComponent };
//# sourceMappingURL=color-picker.component.js.map