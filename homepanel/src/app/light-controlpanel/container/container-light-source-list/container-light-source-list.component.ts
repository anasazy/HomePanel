import { Component, OnInit, Input } from '@angular/core';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';

@Component({
  selector: 'app-container-light-source-list',
  templateUrl: './container-light-source-list.component.html',
  styleUrls: ['./container-light-source-list.component.css']
})
export class ContainerLightSourceListComponent implements OnInit {
  @Input() IDs;

  constructor(
    private icon_service: IconService,
    private panel_fact_service: PanelLightSourceFactoryService
  ) { }

  ngOnInit() {

  }

  getTiles() {
    let tiles = [];
    for (let ID of this.IDs) {
      let tile = this.resolveID(ID);
      tiles.push(tile);
    }

    return tiles;
  }

  private resolveID(LightSourceID) {
    let ls = this.panel_fact_service.getLightSource(LightSourceID);
    let icon = this.icon_service.getIcon(ls.icon_display);
    return {
      label: ls.label,
      icon: icon,
      link: LightSourceID + '/conf'
    };
  }

}
