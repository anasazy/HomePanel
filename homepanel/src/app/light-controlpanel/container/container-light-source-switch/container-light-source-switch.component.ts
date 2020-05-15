import { Component, OnInit, Input } from '@angular/core';

import { SwitchComponent } from '../../components/switch/switch.component';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';

@Component({
  selector: 'app-container-light-source-switch',
  templateUrl: './container-light-source-switch.component.html',
  styleUrls: ['./container-light-source-switch.component.css']
})
export class ContainerLightSourceSwitchComponent implements OnInit {
  @Input() source_id;

  panel_source;
  hue_source;

  icon_switch_off;
  icon_switch_on;

  constructor(
    private icon_service: IconService,
    private panel_fact_service: PanelLightSourceFactoryService,
    private hue_fact_service: HueLightSourceFactoryService
  ) { }

  ngOnInit() {
    this.resolveID();
    this.getIcons();
  }

  private resolveID(): void {
    this.panel_source = this.panel_fact_service.getLightSource(this.source_id);
    this.hue_source = this.hue_fact_service.getHueLightSource(this.panel_source.hue_id,
      this.panel_source.hue_type);
  }

  private getIcons(): void {
    this.icon_switch_off = this.icon_service.getIcon(this.panel_source.icon_switch_off);
    this.icon_switch_on = this.icon_service.getIcon(this.panel_source.icon_switch_on);
  }

  handleSwitchChanged(e) {
    if (e.state === true) {
      this.hue_source.setOn();
    } else {
      this.hue_source.setOff();
    }
  }
}
