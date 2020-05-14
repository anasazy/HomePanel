import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let GroupService = class GroupService {
    constructor() {
        this.groups = {
            0: { "hueid": 3, "type": "kitchen", "label": "Küche" },
            1: { "hueid": 2, "type": "floor", "label": "Flur" },
            2: { "hueid": 1, "type": "bedroom", "label": "Schlafzimmer" }
        };
    }
    getGroupType(GroupID) {
        return this.groups[GroupID]["type"];
    }
    getHueID(GroupID) {
        return this.groups[GroupID]["hueid"];
    }
    getGroupLabel(GroupID) {
        return this.groups[GroupID]["label"];
    }
    listGroupIDs() {
        return Object.keys(this.groups);
    }
    getGroup(GroupID) {
        let group = new Group();
        group.id = GroupID;
        group.hueid = this.getHueID(GroupID);
        group.type = this.getGroupType(GroupID);
        group.label = this.getGroupLabel(GroupID);
        return group;
    }
};
GroupService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GroupService);
export { GroupService };
export class Group {
    constructor() { }
}
//# sourceMappingURL=group.service.js.map