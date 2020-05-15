import { Component, OnInit, Input } from '@angular/core';

import { SwitchComponent } from '../../components/switch/switch.component';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';

@Component({
  selector: 'app-container-light-source',
  templateUrl: './container-light-source.component.html',
  styleUrls: ['./container-light-source.component.css']
})
export class ContainerLightSourceComponent implements OnInit {

  @Input() source_id;

  private panel_source;
  private hue_source;

  constructor(
    private icon_service: IconService,
    private panel_fact_service: PanelLightSourceFactoryService,
    private hue_fact_service: HueLightSourceFactoryService
  ) { }

  ngOnInit() {
    this.resolveID();
    this.getIcons();

    console.log(this.panel_source);
    console.log(this.hue_source);
  }

  private resolveID(): void {
    this.panel_source = this.panel_fact_service.getLightSource(this.source_id);
    this.hue_source = this.hue_fact_service.getHueLightSource(this.panel_source.hue_id,
      this.panel_source.hue_type);
  }

  private getIcons(): void {

  }

}
