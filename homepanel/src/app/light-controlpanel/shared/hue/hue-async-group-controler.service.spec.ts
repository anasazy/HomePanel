import { TestBed } from '@angular/core/testing';

import { HueAsyncGroupControllerService } from './hue-async-group-controler.service';

describe('HueAsyncGroupControllerService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HueAsyncGroupControllerService = TestBed.get(HueAsyncGroupControllerService);
		expect(service).toBeTruthy();
	});
});
