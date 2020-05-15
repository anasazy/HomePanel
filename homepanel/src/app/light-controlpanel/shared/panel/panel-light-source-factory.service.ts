import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelLightSourceFactoryService {

  light_sources = {
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

  private getItemType(LightSourceID: number): string {
    return this.light_sources[LightSourceID]['type'];
  }

  private getItemLabel(LightSourceID: number): string {
    return this.light_sources[LightSourceID]['label'];
  }

  private getHueID(LightSourceID: number): number {
    return this.light_sources[LightSourceID]['hue']['id'];
  }

  private getHueType(LightSourceID: number): string {
    return this.light_sources[LightSourceID]['hue']['type'];
  }

  private getIconDisplay(LightSourceID: number): string {
    return this.light_sources[LightSourceID]['icons']['display'];
  }

  private getIconSwitchOff(LightSourceID: number): string {
    return this.light_sources[LightSourceID]['icons']['switch']['off'];
  }

  private getIconSwitchOn(LightSourceID: number): string {
    return this.light_sources[LightSourceID]['icons']['switch']['on'];
  }

  getLightSource(LightSourceID: number): LightSource {

    const ls = new LightSource();

    ls.id = LightSourceID;
    ls.type = this.getItemType(LightSourceID);
    ls.label = this.getItemLabel(LightSourceID);

    ls.hue_id = this.getHueID(LightSourceID);
    ls.hue_type = this.getHueType(LightSourceID);

    ls.icon_display = this.getIconDisplay(LightSourceID);
    ls.icon_switch_off = this.getIconSwitchOff(LightSourceID);
    ls.icon_switch_on = this.getIconSwitchOn(LightSourceID);

    return ls;
  }

}

class LightSource {

  id: number;
  type: string;
  label: string;

  hue_id: number;
  hue_type: string;

  icon_display: string;
  icon_switch_off: string;
  icon_switch_on: string;

  constructor() { }
}
