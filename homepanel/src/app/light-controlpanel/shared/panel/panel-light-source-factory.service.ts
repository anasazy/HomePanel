import { Injectable } from '@angular/core';

import { LightSource } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class PanelLightSourceFactoryService {

	lightSources = {
		1: {
			type: 'kitchen',
			label: 'Küche',
			hue: {
				id: 3,
				type: 'group'
			},
			icons: {
				display: 'dp_kitchen',
				switch: {
					off: 'sw_kitchen_off',
					on: 'sw_kitchen_on'
				}
			}
		},
		2: {
			type: 'floor',
			label: 'Flur',
			hue: {
				id: 2,
				type: 'group'
			},
			icons: {
				display: 'dp_floor',
				switch: {
					off: 'sw_floor_off',
					on: 'sw_floor_on'
				}
			}
		},
		3: {
			type: 'bedroom',
			label: 'Schlafzimmer',
			hue: {
				id: 1,
				type: 'group'
			},
			icons: {
				display: 'dp_bedroom',
				switch: {
					off: 'sw_bedrom_off',
					on: 'sw_bedrom_on'
				}
			}
		}
	};

	constructor() { }

	private getItemType(lightSourceID: number): string {
		return this.lightSources[lightSourceID].type;
	}

	private getItemLabel(lightSourceID: number): string {
		return this.lightSources[lightSourceID].label;
	}

	private getHueID(lightSourceID: number): number {
		return this.lightSources[lightSourceID].hue.id;
	}

	private getHueType(lightSourceID: number): string {
		return this.lightSources[lightSourceID].hue.type;
	}

	private getIconDisplay(lightSourceID: number): string {
		return this.lightSources[lightSourceID].icons.display;
	}

	private getIconSwitchOff(lightSourceID: number): string {
		return this.lightSources[lightSourceID].icons.switch.off;
	}

	private getIconSwitchOn(lightSourceID: number): string {
		return this.lightSources[lightSourceID].icons.switch.on;
	}

	getLightSource(lightSourceID: number): LightSource {
		const ls = new LightSource();

		ls.id = lightSourceID;
		ls.type = this.getItemType(lightSourceID);
		ls.label = this.getItemLabel(lightSourceID);

		ls.hue_id = this.getHueID(lightSourceID);
		ls.hue_type = this.getHueType(lightSourceID);

		ls.icon_display = this.getIconDisplay(lightSourceID);
		ls.icon_switch_off = this.getIconSwitchOff(lightSourceID);
		ls.icon_switch_on = this.getIconSwitchOn(lightSourceID);

		return ls;
	}

}
