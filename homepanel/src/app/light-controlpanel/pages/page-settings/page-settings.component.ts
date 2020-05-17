import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-page-settings',
	templateUrl: './page-settings.component.html',
	styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent implements OnInit {

	lightSourceId: number;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) { }

	ngOnInit(): void {
		this.router.events.subscribe(() => {
			this.lightSourceId = this.route.snapshot.params.id;
		});
	}

}
