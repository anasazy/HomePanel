import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SettingsViewComponent = class SettingsViewComponent {
    constructor(route, router, groupservice) {
        this.router = router;
        this.route = route;
        this.groupservice = groupservice;
        router.events.subscribe((val) => this.getItemData());
    }
    ngOnInit() {
        this.getItemData();
    }
    getItemData() {
        this.updateViewItem();
        this.updateTitle();
    }
    updateTitle() {
        let groupname = this.groupservice.getGroupName(this.itemid);
        this.title = groupname;
    }
    updateViewItem() {
        this.itemid = this.route.snapshot.params['id'];
    }
};
SettingsViewComponent = __decorate([
    Component({
        selector: 'app-settings-view',
        templateUrl: './settings-view.component.html',
        styleUrls: ['./settings-view.component.css']
    })
], SettingsViewComponent);
export { SettingsViewComponent };
//# sourceMappingURL=settings-view.component.js.map