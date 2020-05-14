import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HueIOService = class HueIOService {
    constructor() {
        this.apikey = "gnHADL1WPAqmiPz2sEwdNNeKXWG2eYnii3MyABKd";
    }
    sendLightState(LightID, State) {
        let endpoint = "http://philips-hue/api/" + this.apikey + "/lights/" + LightID + "/state";
        let request = new XMLHttpRequest();
        request.open('PUT', endpoint, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(State));
    }
    fetchLightState(LightID) {
        let endpoint = "http://philips-hue/api/" + this.apikey + "/lights/" + LightID;
        let request = new XMLHttpRequest();
        request.open('GET', endpoint, false);
        request.overrideMimeType("application/json");
        request.send(null);
        let response = JSON.parse(request.responseText);
        let state = response["state"];
        return state;
    }
    sendGroupState(GroupID, State) {
        let endpoint = "http://philips-hue/api/" + this.apikey + "/groups/" + GroupID + "/action";
        let request = new XMLHttpRequest();
        request.open('PUT', endpoint, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(State));
        console.log("[hueIO tx] group: " + GroupID + " state: " + JSON.stringify(State));
    }
    fetchAllGroupStates() {
        let endpoint = "http://philips-hue/api/" + this.apikey + "/groups";
        let request = new XMLHttpRequest();
        request.open('GET', endpoint, false);
        request.overrideMimeType("application/json");
        request.send(null);
        let response = JSON.parse(request.responseText);
        let states = {};
        for (var room in response) {
            states[room] = response[room]["action"];
        }
        console.log("[hueIO rx] group: all states");
        return states;
    }
    fetchGroupState(GroupID) {
        let endpoint = "http://philips-hue/api/" + this.apikey + "/groups/" + GroupID;
        let request = new XMLHttpRequest();
        request.open('GET', endpoint, false);
        request.overrideMimeType("application/json");
        request.send(null);
        let response = JSON.parse(request.responseText);
        let state = response["action"];
        console.log("[hueIO rx] group: " + GroupID + " state: " + JSON.stringify(state));
        return state;
    }
};
HueIOService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HueIOService);
export { HueIOService };
//# sourceMappingURL=hue-io.service.js.map