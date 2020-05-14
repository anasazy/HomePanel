import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SwitchGridComponent = class SwitchGridComponent {
    constructor(gridservice) {
        this.gridservice = gridservice;
    }
    ngOnInit() {
    }
    handleSwitchEvent(ItemID, e) {
        this.switchUpdate(ItemID, e["state"]);
    }
    switchUpdate(ItemID, state) {
        this.gridservice.switchUpdate(ItemID, state);
    }
    getGroupList() {
        return this.gridservice.getGroupDisplayList();
    }
};
SwitchGridComponent = __decorate([
    Component({
        selector: 'app-switch-grid',
        templateUrl: './switch-grid.component.html',
        styleUrls: ['./switch-grid.component.css']
    })
], SwitchGridComponent);
export { SwitchGridComponent };
//# sourceMappingURL=switch-grid.component.js.map