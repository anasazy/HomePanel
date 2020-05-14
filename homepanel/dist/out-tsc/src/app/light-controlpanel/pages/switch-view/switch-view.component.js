import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SwitchViewComponent = class SwitchViewComponent {
    constructor() {
        this.title = "Panel";
        this.navoptions = [{ "link": "/light/settings/0", "icon": "/assets/img/nav/settings_light.png" }];
    }
    ngOnInit() {
    }
};
SwitchViewComponent = __decorate([
    Component({
        selector: 'app-switch-view',
        templateUrl: './switch-view.component.html',
        styleUrls: ['./switch-view.component.css']
    })
], SwitchViewComponent);
export { SwitchViewComponent };
//# sourceMappingURL=switch-view.component.js.map