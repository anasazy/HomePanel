import { __decorate } from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let SwitchComponent = class SwitchComponent {
    constructor() {
        this.switchChanged = new EventEmitter();
    }
    ngOnInit() { }
    clickHandler(e) {
        this.toggleState();
        let event = {
            "state": this.state,
            "type": "SwitchChangedEvent",
            "source": "SwitchComponent",
            "id": this.id
        };
        this.switchChanged.emit(event);
    }
    toggleState() {
        this.state = !this.state;
    }
    // Visuals
    getIcon() {
        if (this.state) {
            return this.icon_on;
        }
        else {
            return this.icon_off;
        }
    }
};
__decorate([
    Input()
], SwitchComponent.prototype, "state", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "icon_on", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "icon_off", void 0);
__decorate([
    Input()
], SwitchComponent.prototype, "id", void 0);
__decorate([
    Output()
], SwitchComponent.prototype, "switchChanged", void 0);
SwitchComponent = __decorate([
    Component({
        selector: 'app-switch',
        templateUrl: './switch.component.html',
        styleUrls: ['./switch.component.css']
    })
], SwitchComponent);
export { SwitchComponent };
//# sourceMappingURL=switch.component.js.map