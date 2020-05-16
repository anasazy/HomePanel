import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

export interface SwitchChangeEvent {
	id: number;
	source: string;
	state: any;
	type: string;
}

@Component({
	selector: 'app-switch',
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

	@Input() iconOff: string;
	@Input() iconOn: string;
	@Input() id: number;
	@Input() state: any;

	@Output() switchChanged = new EventEmitter<SwitchChangeEvent>();

	constructor() { }

	ngOnInit(): void {
	}

	clickHandler(e): void {
		this.toggleState();

		const event: SwitchChangeEvent = {
			id: this.id,
			source: 'SwitchComponent',
			state: this.state,
			type: 'SwitchChangedEvent',
		};
		this.switchChanged.emit(event);
	}

	toggleState(): void {
		this.state = !this.state;
	}

	// Visuals
	getIcon(): string {
		return this.state ? this.iconOn : this.iconOff;
	}
}
