import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-menu-button',
	templateUrl: './menu-button.component.html',
	styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

	@Input() icon: string;
	@Input() link: string;

	constructor() { }

	ngOnInit(): void {
	}

}
