import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-light-source-tile',
	templateUrl: './light-source-tile.component.html',
	styleUrls: ['./light-source-tile.component.css']
})
export class LightSourceTileComponent implements OnInit {

	@Input() icon;
	@Input() label;
	@Input() link;

	constructor() { }

	ngOnInit() {
	}

}
