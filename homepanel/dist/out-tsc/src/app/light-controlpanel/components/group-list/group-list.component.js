import { __decorate } from "tslib";
import { Component } from '@angular/core';
let GroupListComponent = class GroupListComponent {
    constructor(groupservice) {
        this.endpoint = "/light/settings/";
        this.groupservice = groupservice;
    }
    ngOnInit() {
    }
    getLink(GroupID) {
        return this.endpoint + GroupID;
    }
    getListItems() {
        let items = [];
        for (let groupid in this.groupservice.listGroupIDs()) {
            let item = {};
            item["id"] = Number(groupid);
            item["name"] = this.groupservice.getGroupName(Number(groupid));
            item["link"] = this.getLink(Number(groupid));
            items.push(item);
        }
        return items;
    }
};
GroupListComponent = __decorate([
    Component({
        selector: 'app-group-list',
        templateUrl: './group-list.component.html',
        styleUrls: ['./group-list.component.css']
    })
], GroupListComponent);
export { GroupListComponent };
//# sourceMappingURL=group-list.component.js.map