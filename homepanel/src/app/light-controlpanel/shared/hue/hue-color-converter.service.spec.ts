import { TestBed } from '@angular/core/testing';

import { HueColorConverterService } from './hue-color-converter.service';

describe('HueColorConverterService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HueColorConverterService = TestBed.get(HueColorConverterService);
		expect(service).toBeTruthy();
	});
});
