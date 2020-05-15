import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HueIOService {

	apikey = '';

	constructor() { }

	sendLightState(LightID: number, State: object) {
		const endpoint = 'http://philips-hue/api/' + this.apikey + '/lights/' + LightID + '/state';

		const request = new XMLHttpRequest();

		request.open('PUT', endpoint, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(State));
	}

	fetchLightState(LightID: number): object {
		const endpoint = 'http://philips-hue/api/' + this.apikey + '/lights/' + LightID;

		const request = new XMLHttpRequest();

		request.open('GET', endpoint, false);
		request.overrideMimeType('application/json');
		request.send(null);

		const response = JSON.parse(request.responseText);
		const state = response.state;

		return state;
	}

	sendGroupState(GroupID: number, State: object) {
		const endpoint = 'http://philips-hue/api/' + this.apikey + '/groups/' + GroupID + '/action';

		const request = new XMLHttpRequest();

		request.open('PUT', endpoint, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(State));
		console.log('[hueIO tx] group: ' + GroupID + ' state: ' + JSON.stringify(State));
	}

	fetchAllGroupStates(): object {
		const endpoint = 'http://philips-hue/api/' + this.apikey + '/groups';

		const request = new XMLHttpRequest();

		request.open('GET', endpoint, false);
		request.overrideMimeType('application/json');
		request.send(null);

		const response = JSON.parse(request.responseText);
		const states = {};

		for (const room in response) {
			states[room] = response[room].action;
		}
		console.log('[hueIO rx] group: all states');
		return states;
	}


	fetchGroupState(GroupID: number): object {
		const endpoint = 'http://philips-hue/api/' + this.apikey + '/groups/' + GroupID;

		const request = new XMLHttpRequest();

		request.open('GET', endpoint, false);
		request.overrideMimeType('application/json');
		request.send(null);

		const response = JSON.parse(request.responseText);
		const state = response.action;
		console.log('[hueIO rx] group: ' + GroupID + ' state: ' + JSON.stringify(state));
		return state;
	}

}
