import { TestBed } from '@angular/core/testing';

import { HueAsyncGroupControlerService } from './hue-async-group-controler.service';

describe('HueAsyncGroupControlerService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HueAsyncGroupControlerService = TestBed.get(HueAsyncGroupControlerService);
		expect(service).toBeTruthy();
	});
});
