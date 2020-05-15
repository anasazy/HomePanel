import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HueIOService {

	apikey = "";

	constructor() { }

	sendLightState(LightID: number, State: object) {
		let endpoint = "http://philips-hue/api/" + this.apikey + "/lights/" + LightID + "/state";

		let request = new XMLHttpRequest();

		request.open('PUT', endpoint, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(State));
	}

	fetchLightState(LightID: number): object {
		let endpoint = "http://philips-hue/api/" + this.apikey + "/lights/" + LightID;

		let request = new XMLHttpRequest();

		request.open('GET', endpoint, false);
		request.overrideMimeType("application/json");
		request.send(null);

		let response = JSON.parse(request.responseText);
		let state = response["state"];

		return state;
	}

	sendGroupState(GroupID: number, State: object) {
		let endpoint = "http://philips-hue/api/" + this.apikey + "/groups/" + GroupID + "/action";

		let request = new XMLHttpRequest();

		request.open('PUT', endpoint, true);
		request.setRequestHeader("Content-Type", "application/json");
		request.send(JSON.stringify(State));
		console.log("[hueIO tx] group: " + GroupID + " state: " + JSON.stringify(State));
	}

	fetchAllGroupStates(): object {
		let endpoint = "http://philips-hue/api/" + this.apikey + "/groups";

		let request = new XMLHttpRequest();

		request.open('GET', endpoint, false);
		request.overrideMimeType("application/json");
		request.send(null);

		let response = JSON.parse(request.responseText);
		let states = {};

		for (var room in response) {
			states[room] = response[room]["action"];
		}
		console.log("[hueIO rx] group: all states");
		return states;
	}


	fetchGroupState(GroupID: number): object {
		let endpoint = "http://philips-hue/api/" + this.apikey + "/groups/" + GroupID;

		let request = new XMLHttpRequest();

		request.open('GET', endpoint, false);
		request.overrideMimeType("application/json");
		request.send(null);

		let response = JSON.parse(request.responseText);
		let state = response["action"];
		console.log("[hueIO rx] group: " + GroupID + " state: " + JSON.stringify(state));
		return state;
	}

}
