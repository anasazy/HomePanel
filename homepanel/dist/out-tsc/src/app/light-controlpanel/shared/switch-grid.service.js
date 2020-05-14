import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SwitchGridService = class SwitchGridService {
    constructor(huecontroler, groupservice) {
        this.groupservice = groupservice;
        this.huecontroler = huecontroler;
    }
    switchUpdate(ItemID, state) {
        let hueid = this.groupservice.getHueID(ItemID);
        if (state == true) {
            this.huecontroler.setOn(hueid);
        }
        else {
            this.huecontroler.setOff(hueid);
        }
    }
    getGroupDisplayList() {
        let list = [];
        for (var id in this.groupservice.listGroupIDs()) {
            let group = this.groupservice.getGroup(id);
            let room = {};
            room["id"] = id;
            room["type"] = group.type;
            room["state"] = this.huecontroler.getSwitchState(group.hueid);
            list.push(room);
        }
        return list;
    }
};
SwitchGridService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SwitchGridService);
export { SwitchGridService };
//# sourceMappingURL=switch-grid.service.js.map