import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let SettingsGridComponent = class SettingsGridComponent {
    constructor(gridservice) {
        this.gridservice = gridservice;
    }
    ngOnInit() {
    }
    getBrightness() {
        return this.gridservice.getBrightness(this.itemid);
    }
    setBrightness(brightness) {
        this.gridservice.setBrightness(this.itemid, brightness);
    }
    handleBrightnessChanged(e) {
        this.setBrightness(e['brightness']);
    }
    handleColorChanged(e) {
        let hsvcolor = e["color"]["hsv"];
        this.setColor(hsvcolor);
    }
    setColor(HSVColor) {
        this.gridservice.setColor(this.itemid, HSVColor);
    }
};
__decorate([
    Input()
], SettingsGridComponent.prototype, "itemid", void 0);
SettingsGridComponent = __decorate([
    Component({
        selector: 'app-settings-grid',
        templateUrl: './settings-grid.component.html',
        styleUrls: ['./settings-grid.component.css']
    })
], SettingsGridComponent);
export { SettingsGridComponent };
//# sourceMappingURL=settings-grid.component.js.map