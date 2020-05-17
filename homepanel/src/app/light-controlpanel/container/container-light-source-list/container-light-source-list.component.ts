import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IconService } from '../../shared/icon.service';
import { PanelLightSourceFactoryService } from '../../shared/panel/panel-light-source-factory.service';

export interface Tile {
	icon: string;
	label: string;
	link: string;
}

@Component({
	selector: 'app-container-light-source-list',
	templateUrl: './container-light-source-list.component.html',
	styleUrls: ['./container-light-source-list.component.css']
})
export class ContainerLightSourceListComponent implements OnInit, OnChanges {

	tiles: Tile[];

	@Input() IDs: number[];

	constructor(
		private readonly iconService: IconService,
		private readonly panelService: PanelLightSourceFactoryService,
	) { }

	ngOnInit(): void {
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.tiles = this.IDs.map(id => this.resolveID(id));
	}

	private resolveID(lightSourceID: number): Tile {
		const lightSource = this.panelService.getLightSource(lightSourceID);
		const icon = this.iconService.getIcon(lightSource.icon_display);

		return {
			label: lightSource.label,
			icon,
			link: lightSourceID + '/conf'
		};
	}

}
