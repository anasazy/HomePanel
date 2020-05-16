import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-select-button',
	templateUrl: './select-button.component.html',
	styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {

	@Input() label: string;
	@Input() isHighlighted: boolean;

	@Output() buttonSelected = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	handleSelect(): void {
		this.buttonSelected.emit();
	}
}
