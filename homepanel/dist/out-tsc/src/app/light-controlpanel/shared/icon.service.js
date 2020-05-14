import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let IconService = class IconService {
    constructor() {
        this.icons = {
            "sw_bedrom_off": "/assets/img/switch/bedroom_off.png",
            "sw_bedrom_on": "/assets/img/switch/bedroom_on.png",
            "sw_kitchen_off": "/assets/img/switch/kitchen_off.png",
            "sw_kitchen_on": "/assets/img/switch/kitchen_on.png",
            "sw_floor_off": "/assets/img/switch/floor_off.png",
            "sw_floor_on": "/assets/img/switch/floor_on.png",
            "nav_light_set": "",
            "nav_arr_left": "",
        };
    }
    getIcon(IconName) {
        return this.icons[IconName];
    }
};
IconService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IconService);
export { IconService };
//# sourceMappingURL=icon.service.js.map