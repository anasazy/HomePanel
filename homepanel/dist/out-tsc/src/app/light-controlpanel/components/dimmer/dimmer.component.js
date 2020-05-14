import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let DimmerComponent = class DimmerComponent {
    constructor() {
        this.rangeMin = 1;
        this.rangeMax = 254;
        this.percentage = 0;
        this.brightnessChanged = new EventEmitter();
    }
    ngOnInit() { }
    changeHandler(value) {
        this.updateBrightness(value);
        let event = {
            "brightness": this.brightness,
            "percentage": this.percentage,
            "type": "BrightnessChangedEvent",
            "source": "DimmerComponent",
            "id": this.id
        };
        this.brightnessChanged.emit(event);
    }
    updateBrightness(value) {
        this.brightness = value;
    }
    // Visuals
    getRangeBarCSS() {
        this.calcFillPercentage();
        return this.getGradientString();
    }
    getGradientString() {
        return 'linear-gradient(0deg, rgb(' + this.brightness + ',' + this.brightness + ',' + this.brightness + ') ' + this.percentage + '%, rgb(25,25,25) ' + this.percentage + '%)';
    }
    calcFillPercentage() {
        this.percentage = (this.brightness / this.rangeMax) * 100;
    }
};
__decorate([
    Input()
], DimmerComponent.prototype, "id", void 0);
__decorate([
    Input()
], DimmerComponent.prototype, "brightness", void 0);
__decorate([
    Output()
], DimmerComponent.prototype, "brightnessChanged", void 0);
DimmerComponent = __decorate([
    Component({
        selector: 'app-dimmer',
        templateUrl: './dimmer.component.html',
        styleUrls: ['./dimmer.component.css']
    })
], DimmerComponent);
export { DimmerComponent };
//# sourceMappingURL=dimmer.component.js.map