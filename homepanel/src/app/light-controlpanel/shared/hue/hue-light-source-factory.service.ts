import { Injectable } from '@angular/core';

import { HueGroup } from './hue-models';
import { HueAsyncGroupControllerService } from './hue-async-group-controler.service';

@Injectable({
	providedIn: 'root'
})

export class HueLightSourceFactoryService {

	constructor(
		private readonly controller: HueAsyncGroupControllerService
	) { }

	getGroup(id: number): HueGroup {
		const group = new HueGroup();
		group.id = id;
		group.controller = this.controller;
		return group;
	}

	getHueLightSource(id: number, type: string): HueGroup {
		if (type === 'group') {
			return this.getGroup(id);
		}
	}
}
