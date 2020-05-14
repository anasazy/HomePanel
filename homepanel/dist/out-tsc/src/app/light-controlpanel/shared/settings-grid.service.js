import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SettingsGridService = class SettingsGridService {
    constructor(huecontroler, groupservice) {
        this.groupservice = groupservice;
        this.huecontroler = huecontroler;
    }
    getBrightness(ItemID) {
        let hueid = this.groupservice.getHueID(ItemID);
        let brigtness = this.huecontroler.getBrightness(hueid);
        return brigtness;
    }
    setBrightness(ItemID, brigtness) {
        let hueid = this.groupservice.getHueID(ItemID);
        this.huecontroler.setBrightness(hueid, brigtness);
    }
    setColor(ItemID, HSVColor) {
        let hueid = this.groupservice.getHueID(ItemID);
        this.huecontroler.setColor(hueid, HSVColor);
    }
};
SettingsGridService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SettingsGridService);
export { SettingsGridService };
//# sourceMappingURL=settings-grid.service.js.map