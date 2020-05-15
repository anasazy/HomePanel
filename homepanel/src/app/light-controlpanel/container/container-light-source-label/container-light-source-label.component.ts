import { Component, OnInit, Input } from '@angular/core';

import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';

@Component({
	selector: 'app-container-light-source-label',
	templateUrl: './container-light-source-label.component.html',
	styleUrls: ['./container-light-source-label.component.css']
})
export class ContainerLightSourceLabelComponent implements OnInit {
	@Input() source_id;

	light_source;

	constructor(
		private panel_fact_service: PanelLightSourceFactoryService
	) { }

	ngOnInit() {
		this.resolveID();
	}

	resolveID() {
		this.light_source = this.panel_fact_service.getLightSource(this.source_id);
	}

}
