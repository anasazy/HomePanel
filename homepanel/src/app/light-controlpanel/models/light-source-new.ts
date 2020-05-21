export interface State {
	alert: string; // select, none
	bri: number;
	colormode: string; // xy
	ct: number;
	effect: string; // none
	hue: number;
	mode: string; // homeautomation
	on: false;
	reachable: boolean;
	sat: number;
	xy: [number, number];
}

export interface SoftwareUpdate {
	lastinstall: string; // 2020-03-03T13:52:29
	state: string; // noupdates
}

export interface StartUp {
	configured: boolean;
	mode: string; // safety
}

export interface Config {
	archetype: string; // sultanbulb, huelightstrip
	direction: string; // omnidirectional
	function: string; // mixed
	startup: StartUp;
}

export interface Streaming {
	renderer: boolean;
	proxy: boolean;
}

export interface CT {
	min: number;
	max: number;
}

export interface Control {
	colorgamut: [[number, number], [number, number], [number, number]];
	colorgamuttype: string; // C
	ct: CT;
	maxlumen: number;
	mindimlevel: number;
}

export interface Capabilities {
	certified: boolean;
	control: Control;
	streaming: Streaming;
}

export interface LightSource {
	capabilities: Capabilities;
	config: Config;
	manufacturername: string;
	modelid: string;
	name: string;
	productid: string;
	productname: string;
	state: State;
	swconfigid: string;
	swupdate: SoftwareUpdate;
	swversion: string;
	type: string;
	uniqueid: string;
}
