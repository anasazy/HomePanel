import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page-list',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

	lightSources = [1, 2, 3];

	constructor() { }

	ngOnInit(): void {
	}

}
