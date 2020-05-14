import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NavigationHeaderComponent = class NavigationHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    hasArrowBack() {
        if (this.linkArrowBack != null) {
            return true;
        }
        return false;
    }
    hasTitleIcon() {
        if (this.linkTitleIcon != null) {
            return true;
        }
        return false;
    }
    hasOptions() {
        if (this.options != null) {
            return true;
        }
        return false;
    }
};
__decorate([
    Input()
], NavigationHeaderComponent.prototype, "linkArrowBack", void 0);
__decorate([
    Input()
], NavigationHeaderComponent.prototype, "linkTitleIcon", void 0);
__decorate([
    Input()
], NavigationHeaderComponent.prototype, "title", void 0);
__decorate([
    Input()
], NavigationHeaderComponent.prototype, "options", void 0);
NavigationHeaderComponent = __decorate([
    Component({
        selector: 'app-navigation-header',
        templateUrl: './navigation-header.component.html',
        styleUrls: ['./navigation-header.component.css']
    })
], NavigationHeaderComponent);
export { NavigationHeaderComponent };
//# sourceMappingURL=navigation-header.component.js.map