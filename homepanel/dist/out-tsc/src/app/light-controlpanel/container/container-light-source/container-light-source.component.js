import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ContainerLightSourceComponent = class ContainerLightSourceComponent {
    constructor(icon_service, panel_fact_service, hue_fact_service) {
        this.icon_service = icon_service;
        this.panel_fact_service = panel_fact_service;
        this.hue_fact_service = hue_fact_service;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ContainerLightSourceComponent.prototype, "source_id", void 0);
ContainerLightSourceComponent = __decorate([
    Component({
        selector: 'app-container-light-source',
        templateUrl: './container-light-source.component.html',
        styleUrls: ['./container-light-source.component.css']
    })
], ContainerLightSourceComponent);
export { ContainerLightSourceComponent };
//# sourceMappingURL=container-light-source.component.js.map