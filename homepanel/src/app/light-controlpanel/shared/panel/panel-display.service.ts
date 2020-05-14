import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelDisplayService {
  displays = {0 : [0,1,2]}
  constructor() { }

  getDisplayList(DisplayID: number){
      return this.displays[DisplayID];
  }
}