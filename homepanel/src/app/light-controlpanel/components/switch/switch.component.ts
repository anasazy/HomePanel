import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';



@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
	@Input() state;
	@Input() icon_on;
	@Input() icon_off;
	@Input() id;

	@Output() switchChanged = new EventEmitter();

	constructor() { }

	ngOnInit() { }


	clickHandler(e) {
		this.toggleState();
		let event = {
			"state": this.state,
			"type": "SwitchChangedEvent",
			"source": "SwitchComponent",
			"id": this.id
		};
		this.switchChanged.emit(event);
	}

	toggleState() {
		this.state = !this.state;
	}


	// Visuals
	getIcon() {
		if (this.state) {
			return this.icon_on;
		}
		else {
			return this.icon_off;
		}
	}
}
