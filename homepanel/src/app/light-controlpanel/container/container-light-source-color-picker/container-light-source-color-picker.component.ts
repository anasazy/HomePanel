import { Component, OnInit, Input } from '@angular/core';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { HueLightSourceFactoryService } from '../../shared/hue/hue-light-source-factory.service';

@Component({
	selector: 'app-container-light-source-color-picker',
	templateUrl: './container-light-source-color-picker.component.html',
	styleUrls: ['./container-light-source-color-picker.component.css']
})
export class ContainerLightSourceColorPickerComponent implements OnInit {
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


	handleColorChanged(e) {
		const color = e.color.hsv;
		this.hue_source.setColor(color);
	}

}
