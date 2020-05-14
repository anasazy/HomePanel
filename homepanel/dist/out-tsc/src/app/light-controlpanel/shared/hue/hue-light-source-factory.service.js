import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HueGroup } from './hue-models';
let HueLightSourceFactoryService = class HueLightSourceFactoryService {
    constructor(controler) {
        this.controler = controler;
    }
    getGroup(ID) {
        let group = new HueGroup();
        group.id = ID;
        group.controler = this.controler;
        return group;
    }
    getHueItem(ID, type) {
        if (type == "Group") {
            return this.getGroup(ID);
        }
    }
};
HueLightSourceFactoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HueLightSourceFactoryService);
export { HueLightSourceFactoryService };
//# sourceMappingURL=hue-light-source-factory.service.js.map