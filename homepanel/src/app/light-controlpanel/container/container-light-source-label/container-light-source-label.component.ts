import { Component, OnInit, Input } from '@angular/core';

import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';
import { LightSource } from '../../models';

@Component({
	selector: 'app-container-light-source-label',
	templateUrl: './container-light-source-label.component.html',
	styleUrls: ['./container-light-source-label.component.css']
})
export class ContainerLightSourceLabelComponent implements OnInit {

	lightSource: LightSource;

	@Input() sourceID;

	constructor(
		private readonly panelService: PanelLightSourceFactoryService,
	) { }

	ngOnInit() {
		this.lightSource = this.panelService.getLightSource(this.sourceID);
	}

}
