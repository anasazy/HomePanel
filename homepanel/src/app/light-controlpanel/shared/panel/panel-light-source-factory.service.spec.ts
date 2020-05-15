import { TestBed } from '@angular/core/testing';

import { PanelLightSourceFactoryService } from './panel-light-source-factory.service';

describe('PanelLightSourceFactoryService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PanelLightSourceFactoryService = TestBed.inject(PanelLightSourceFactoryService);
		expect(service).toBeTruthy();
	});
});
