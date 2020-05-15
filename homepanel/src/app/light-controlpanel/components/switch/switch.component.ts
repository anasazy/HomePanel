import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

	@Input() icon_off;
	@Input() icon_on;
	@Input() id;
	@Input() state;

	@Output() switchChanged = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	clickHandler(e): void {
		this.toggleState();
		const event = {
			state: this.state,
			type: 'SwitchChangedEvent',
			source: 'SwitchComponent',
			id: this.id
		};
		this.switchChanged.emit(event);
	}

	toggleState(): void {
		this.state = !this.state;
	}

	// Visuals
	getIcon() {
		return this.state ? this.icon_on : this.icon_off;
	}
}
