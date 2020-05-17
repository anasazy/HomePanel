import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class HueIOService {

	private readonly apiKey = environment.apiKey;

	constructor(
		private readonly http: HttpClient,
	) { }

	sendLightState(lightID: number, state): Observable<any> {
		const url = `http://philips-hue/api/${this.apiKey}/lights/${lightID}/state`;
		const headers = new HttpHeaders().append('Content-Type', 'application/json');
		return this.http.put(url, state, { headers });
	}

	fetchLightState(lightID: number): Observable<any> {
		const url = `http://philips-hue/api/${this.apiKey}/lights/${lightID}`;
		const headers = new HttpHeaders().append('Content-Type', 'application/json');
		return this.http.get(url, { headers });
	}

	sendGroupState(groupID: number, state): Observable<any> {
		const url = `http://philips-hue/api/${this.apiKey}/groups/${groupID}/action`;
		const headers = new HttpHeaders().append('Content-Type', 'application/json');
		return this.http.put(url, state, { headers });
	}

	fetchAllGroupStates(): Observable<any> {
		const url = `http://philips-hue/api/${this.apiKey}/groups`;
		const headers = new HttpHeaders().append('Content-Type', 'application/json');
		return this.http.get(url, { headers }).pipe(
			map(response => {
				const states: any = {};
				Object.keys(response).forEach(key => {
					states[key] = response[key].action;
				});
				return states;
			}),
		);
	}

	fetchGroupState(groupID: number): Observable<any> {
		const url = `http://philips-hue/api/${this.apiKey}/groups/${groupID}`;
		const headers = new HttpHeaders().append('Content-Type', 'application/json');
		return this.http.get(url, { headers }).pipe(
			pluck('action'),
		);
	}

}
