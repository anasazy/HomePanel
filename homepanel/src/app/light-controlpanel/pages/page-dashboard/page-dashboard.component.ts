import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-dashboard',
	templateUrl: './page-dashboard.component.html',
	styleUrls: ['./page-dashboard.component.css']
})
export class PageDashboardComponent implements OnInit {

	IDs = [1, 2, 3];
	isShowingSwitches = true;
	isShowingBrightness = false;

	constructor() { }

	ngOnInit(): void {
	}

	handleShowSwitches(): void {
		this.isShowingSwitches = true;
		this.isShowingBrightness = false;
	}

	handleShowBrigthness(): void {
		this.isShowingSwitches = false;
		this.isShowingBrightness = true;
	}

}
