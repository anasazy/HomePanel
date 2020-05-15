import { Component, OnInit, Input } from '@angular/core';

import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';
import { LightSource } from '../../models';
import { HueGroup } from '../../shared/hue/hue-models';

@Component({
	selector: 'app-container-light-source',
	templateUrl: './container-light-source.component.html',
	styleUrls: ['./container-light-source.component.css']
})
export class ContainerLightSourceComponent implements OnInit {

	panelSource: LightSource;
	hueSource: HueGroup;

	@Input() sourceID;

	constructor(
		private readonly panelService: PanelLightSourceFactoryService,
		private readonly hueService: HueLightSourceFactoryService
	) { }

	ngOnInit() {
		this.resolveID();

		console.log(this.panelSource);
		console.log(this.hueSource);
	}

	private resolveID(): void {
		this.panelSource = this.panelService.getLightSource(this.sourceID);
		this.hueSource = this.hueService.getHueLightSource(this.panelSource.hue_id, this.panelSource.hue_type);
	}

}
