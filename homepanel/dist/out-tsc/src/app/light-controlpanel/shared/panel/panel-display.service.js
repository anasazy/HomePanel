import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PanelDisplayService = class PanelDisplayService {
    constructor() {
        this.displays = { 0: [0, 1, 2] };
    }
    getDisplayList(DisplayID) {
        return this.displays[DisplayID];
    }
};
PanelDisplayService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PanelDisplayService);
export { PanelDisplayService };
//# sourceMappingURL=panel-display.service.js.map