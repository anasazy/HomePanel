import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PanelLightSourceFactoryService = class PanelLightSourceFactoryService {
    constructor() {
        this.light_sources = {
            0: {
                "hueid": 3,
                "huetype": "group",
                "type": "kitchen",
                "label": "Küche",
                "hue": {
                    "id": "",
                    "type": ""
                }
            },
            1: {
                "hueid": 2,
                "huetype": "group",
                "type": "floor",
                "label": "Flur",
                "hue": {
                    "id": "",
                    "type": ""
                }
            },
            2: {
                "hueid": 1,
                "huetype": "group",
                "type": "bedroom",
                "label": "Schlafzimmer",
            }
        };
    }
    getItemType(LightSourceID) {
        return this.light_sources[LightSourceID]["type"];
    }
    getItemLabel(LightSourceID) {
        return this.light_sources[LightSourceID]["label"];
    }
    getHueID(LightSourceID) {
        return this.light_sources[LightSourceID]["hueid"];
    }
    getHueType(LightSourceID) {
        return this.light_sources[LightSourceID]["huetype"];
    }
    getLightSource(LightSourceID) {
        let ls = new LightSource();
        ls.id = LightSourceID;
        ls.type = this.getItemType(LightSourceID);
        ls.label = this.getItemLabel(LightSourceID);
        ls.hue_id = this.getHueID(LightSourceID);
        ls.hue_type = this.getHueType(LightSourceID);
        return ls;
    }
};
PanelLightSourceFactoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PanelLightSourceFactoryService);
export { PanelLightSourceFactoryService };
class LightSource {
    constructor() { }
}
//# sourceMappingURL=panel-light-source-factory.service.js.map