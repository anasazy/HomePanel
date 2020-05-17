import { Component, OnInit, Input } from '@angular/core';

import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';
import { LightSource } from '../../models';
import { HueGroup } from '../../shared/hue/hue-models';

@Component({
	selector: 'app-container-light-source-dimmer',
	templateUrl: './container-light-source-dimmer.component.html',
	styleUrls: ['./container-light-source-dimmer.component.css']
})
export class ContainerLightSourceDimmerComponent implements OnInit {

	panelSource: LightSource;
	hueSource: HueGroup;

	@Input() sourceID: number;

	constructor(
		private readonly panelService: PanelLightSourceFactoryService,
		private readonly hueService: HueLightSourceFactoryService,
	) { }

	ngOnInit(): void {
		this.panelSource = this.panelService.getLightSource(this.sourceID);
		this.hueSource = this.hueService.getHueLightSource(this.panelSource.hue_id, this.panelSource.hue_type);
	}

	handleBrightnessChanged(e): void {
		const brightness = e.brightness;
		this.hueSource.setBrightness(brightness);
	}

}
