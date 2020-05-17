import { TestBed } from '@angular/core/testing';

import { HueLightSourceFactoryService } from './hue-light-source-factory.service';

describe('HueLightSourceFactoryService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: HueLightSourceFactoryService = TestBed.inject(HueLightSourceFactoryService);
		expect(service).toBeTruthy();
	});
});
