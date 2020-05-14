import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
let HueAsyncGroupControlerService = class HueAsyncGroupControlerService {
    constructor(hueioservice, colorservice) {
        this.states = null;
        this.changes = { "brightness": {}, "color": {}, "on": {} };
        this.hueioservice = null;
        this.observer = timer(2000, 5000);
        this.syncCheck = this.observer.subscribe(val => this.fetchHueLightStates());
        this.syncTimer = timer(100, 600);
        this.brightnessSync = this.syncTimer.subscribe(val => this.syncBrightnessChanges());
        this.colorSync = this.syncTimer.subscribe(val => this.syncColorChanges());
        this.onSync = this.syncTimer.subscribe(val => this.sycOnChanges());
        this.colorservice = null;
        this.colorservice = colorservice;
        this.hueioservice = hueioservice;
        this.fetchHueLightStates();
    }
    // Hue communication
    sendHueLightState(GroupID, state) {
        this.hueioservice.sendGroupState(GroupID, state);
    }
    fetchHueLightStates() {
        this.states = this.hueioservice.fetchAllGroupStates();
    }
    syncBrightnessChanges() {
        for (let id in this.changes["brightness"]) {
            let brightness = this.changes["brightness"][id];
            let mesg = { "on": true, "bri": Number(brightness) };
            this.sendHueLightState(Number(id), mesg);
            delete this.changes["brightness"][id];
        }
    }
    syncColorChanges() {
        for (let id in this.changes["color"]) {
            let color = this.changes["color"][id];
            let mesg = { "on": true, "sat": color["sat"], "hue": color["hue"] };
            this.sendHueLightState(Number(id), mesg);
            delete this.changes["color"][id];
        }
    }
    sycOnChanges() {
        for (let id in this.changes["on"]) {
            let on = this.changes["on"][id];
            let mesg = { "on": on };
            this.sendHueLightState(Number(id), mesg);
            delete this.changes["on"][id];
        }
    }
    // Set states
    setOn(GroupID) {
        this.changes["on"][GroupID] = true;
        this.states[GroupID]["on"] = true;
    }
    setOff(GroupID) {
        this.changes["on"][GroupID] = false;
        this.states[GroupID]["on"] = false;
    }
    setBrightness(GroupID, brightness) {
        this.changes["brightness"][GroupID] = brightness;
        this.states[GroupID]["bri"] = brightness;
    }
    setColor(GroupID, HSVColor) {
        let cie = this.colorservice.hsv_to_cie(HSVColor["h"], HSVColor["s"], HSVColor["v"]);
        this.changes["color"][GroupID] = cie;
        this.states[GroupID]["hue"] = cie["hue"];
        this.states[GroupID]["sat"] = cie["sat"];
    }
    // Get states
    getSwitchState(GroupID) {
        return this.states[GroupID]["on"];
    }
    getBrightness(GroupID) {
        return this.states[GroupID]["bri"];
    }
    getColor(GroupID) {
        return {};
    }
};
HueAsyncGroupControlerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HueAsyncGroupControlerService);
export { HueAsyncGroupControlerService };
//# sourceMappingURL=hue-async-group-controler.service.js.map