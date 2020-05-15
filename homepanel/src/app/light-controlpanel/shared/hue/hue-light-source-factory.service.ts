import { Injectable } from '@angular/core';

import { HueGroup } from './hue-models';
import { HueAsyncGroupControlerService } from './hue-async-group-controler.service';

@Injectable({
	providedIn: 'root'
})

export class HueLightSourceFactoryService {
	controler;

	constructor(controler: HueAsyncGroupControlerService) {
		this.controler = controler;
	}

	getGroup(ID: number): HueGroup {
		let group = new HueGroup();
		group.id = ID;
		group.controler = this.controler;

		return group;
	}

	getHueLightSource(ID: number, type: string) {
		if (type == "group") {
			return this.getGroup(ID);
		}
	}
}
