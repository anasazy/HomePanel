import { Component, OnInit, Input } from '@angular/core';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';
import { HueGroup } from '../../shared/hue/hue-models';
import { LightSource } from '../../models';

@Component({
	selector: 'app-container-light-source-switch',
	templateUrl: './container-light-source-switch.component.html',
	styleUrls: ['./container-light-source-switch.component.css']
})
export class ContainerLightSourceSwitchComponent implements OnInit {

	hueSource: HueGroup;
	iconSwitchOff: string;
	iconSwitchOn: string;
	panelSource: LightSource;

	@Input() sourceID: number;

	constructor(
		private readonly iconService: IconService,
		private readonly panelService: PanelLightSourceFactoryService,
		private readonly hueService: HueLightSourceFactoryService,
	) { }

	ngOnInit(): void {
		this.resolveID();
		this.getIcons();
	}

	private resolveID(): void {
		this.panelSource = this.panelService.getLightSource(this.sourceID);
		this.hueSource = this.hueService.getHueLightSource(this.panelSource.hue_id, this.panelSource.hue_type);
	}

	private getIcons(): void {
		this.iconSwitchOff = this.iconService.getIcon(this.panelSource.icon_switch_off);
		this.iconSwitchOn = this.iconService.getIcon(this.panelSource.icon_switch_on);
	}

	handleSwitchChanged(e): void {
		const state = e.state;

		if (state === true) {
			this.hueSource.setOn();
		} else {
			this.hueSource.setOff();
		}
	}
}
