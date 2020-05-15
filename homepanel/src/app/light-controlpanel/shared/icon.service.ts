import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  icons = {
    dp_kitchen: '/assets/img/nav/sources/kitchen_selected.png',
    dp_bedroom: '/assets/img/nav/sources/bedroom_selected.png',
    dp_floor: '/assets/img/nav/sources/floor_selected.png',
    sw_bedrom_off: '/assets/img/switch/bedroom_off.png',
    sw_bedrom_on: '/assets/img/switch/bedroom_on.png',
    sw_kitchen_off: '/assets/img/switch/kitchen_off.png',
    sw_kitchen_on: '/assets/img/switch/kitchen_on.png',
    sw_floor_off: '/assets/img/switch/floor_off.png',
    sw_floor_on: '/assets/img/switch/floor_on.png',
    nav_light_set: '',
    nav_arr_left: '',
  };
  constructor() { }

  getIcon(IconName) {
    return this.icons[IconName];
  }
}
