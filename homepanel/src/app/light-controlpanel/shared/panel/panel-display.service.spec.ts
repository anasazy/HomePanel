import { TestBed } from '@angular/core/testing';

import { PanelDisplayService } from './panel-display.service';

describe('PanelDisplayService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: PanelDisplayService = TestBed.inject(PanelDisplayService);
		expect(service).toBeTruthy();
	});
});
