import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Group, Action } from '../../models/group';
import { LightSource } from '../../models/light-source-new';

interface Groups {
	[id: string]: Group;
}

interface Lights {
	[id: string]: LightSource;
}

interface Actions {
	[id: string]: Action;
}

@Injectable({
	providedIn: 'root'
})
export class HueIOService {

	private readonly apiKey = environment.apiKey;

	constructor(
		private readonly http: HttpClient,
	) { }

	sendLightState(lightID: number, state): Observable<any> {
		console.log(`[sendLightState] lightID = ${lightID}, state = ${state}`);

		if (environment.production) {
			const url = `http://philips-hue/api/${this.apiKey}/lights/${lightID}/state`;
			const headers = new HttpHeaders().append('Content-Type', 'application/json');
			return this.http.put(url, state, { headers });
		} else {
			const url = 'assets/data/response-lights-set-3-brightness.json';
			return this.http.get(url);
		}
	}

	fetchLightState(lightID: number): Observable<LightSource> {
		console.log(`[fetchLightState] lightID = ${lightID}`);

		if (environment.production) {
			const url = `http://philips-hue/api/${this.apiKey}/lights/${lightID}`;
			const headers = new HttpHeaders().append('Content-Type', 'application/json');
			return this.http.get<LightSource>(url, { headers });
		} else {
			const url = `assets/data/response-lights-get-3.json`;
			return this.http.get<LightSource>(url);
		}
	}

	sendGroupState(groupID: number, state): Observable<any> {
		console.log(`[sendGroupState] groupID = ${groupID}, state = ${state}`);

		if (environment.production) {
			const url = `http://philips-hue/api/${this.apiKey}/groups/${groupID}/action`;
			const headers = new HttpHeaders().append('Content-Type', 'application/json');
			return this.http.put(url, state, { headers });
		} else {
			const url = `assets/data/response-groups-set-1-color.json`;
			return this.http.get(url);
		}
	}

	fetchAllGroupStates(): Observable<Actions> {
		console.log('[fetchAllGroupStates]');

		if (environment.production) {
			const url = `http://philips-hue/api/${this.apiKey}/groups`;
			const headers = new HttpHeaders().append('Content-Type', 'application/json');
			return this.http.get<Groups>(url, { headers }).pipe(
				map(response => {
					const states: Actions = {};
					Object.keys(response).forEach(key => {
						states[key] = response[key].action;
					});
					return states;
				}),
			);
		} else {
			const url = `assets/data/response-groups-get-all.json`;
			return this.http.get<Groups>(url).pipe(
				map(response => {
					const states: Actions = {};
					Object.keys(response).forEach(key => {
						states[key] = response[key].action;
					});
					return states;
				}),
			);
		}
	}

	fetchGroupState(groupID: number): Observable<Action> {
		console.log(`[fetchGroupState] groupID = ${groupID}`);

		if (environment.production) {
			const url = `http://philips-hue/api/${this.apiKey}/groups/${groupID}`;
			const headers = new HttpHeaders().append('Content-Type', 'application/json');
			return this.http.get(url, { headers }).pipe(
				pluck('action'),
			);
		} else {
			const url = `assets/data/response-groups-get-1.json`;
			return this.http.get<Groups>(url).pipe(
				pluck(groupID.toString(), 'action'),
			);
		}
	}

}
