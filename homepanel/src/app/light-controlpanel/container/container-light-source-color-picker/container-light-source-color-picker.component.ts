import { Component, OnInit, Input } from '@angular/core';

import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';
import { LightSource } from '../../models';
import { HueGroup } from '../../shared/hue/hue-models';

@Component({
	selector: 'app-container-light-source-color-picker',
	templateUrl: './container-light-source-color-picker.component.html',
	styleUrls: ['./container-light-source-color-picker.component.css']
})
export class ContainerLightSourceColorPickerComponent implements OnInit {

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

	handleColorChanged(e): void {
		const color = e.color.hsv;
		this.hueSource.setColor(color);
	}

}
