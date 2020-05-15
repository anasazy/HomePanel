import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSourceTileComponent } from './light-source-tile.component';

describe('LightSourceTileComponent', () => {
	let component: LightSourceTileComponent;
	let fixture: ComponentFixture<LightSourceTileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LightSourceTileComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LightSourceTileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
