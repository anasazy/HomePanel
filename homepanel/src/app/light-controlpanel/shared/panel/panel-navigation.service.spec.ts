import { TestBed } from '@angular/core/testing';

import { PanelNavigationService } from './panel-navigation.service';

describe('PanelNavigationService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PanelNavigationService = TestBed.inject(PanelNavigationService);
		expect(service).toBeTruthy();
	});
});
