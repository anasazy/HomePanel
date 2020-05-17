interface Action {
	alert: string; // select
	bri: number;
	colormode: string; // xy
	ct: number;
	effect: string; // none
	hue: number;
	on: boolean;
	sat: number;
	xy: [number, number];
}

interface State {
	all_on: boolean;
	any_on: boolean;
}

export interface Group {
	action: Action;
	class: string;
	lights: string[];
	name: string;
	recycle: boolean;
	sensors: any[];
	state: State;
	type: string;
}
