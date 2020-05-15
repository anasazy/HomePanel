import { Component, OnInit, Input } from '@angular/core';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';

@Component({
	selector: 'app-container-light-source-dimmer',
	templateUrl: './container-light-source-dimmer.component.html',
	styleUrls: ['./container-light-source-dimmer.component.css']
})
export class ContainerLightSourceDimmerComponent implements OnInit {
	@Input() source_id;

	panel_source;
	hue_source;

	constructor(
		private icon_service: IconService,
		private panel_fact_service: PanelLightSourceFactoryService,
		private hue_fact_service: HueLightSourceFactoryService
	) { }

	ngOnInit() {
		this.resolveID();
	}

	private resolveID(): void {
		this.panel_source = this.panel_fact_service.getLightSource(this.source_id);
		this.hue_source = this.hue_fact_service.getHueLightSource(this.panel_source.hue_id,
			this.panel_source.hue_type);
	}
	handleBrightnessChanged(e) {
		let brightness = e["brightness"];
		this.hue_source.setBrightness(brightness);
	}

}
