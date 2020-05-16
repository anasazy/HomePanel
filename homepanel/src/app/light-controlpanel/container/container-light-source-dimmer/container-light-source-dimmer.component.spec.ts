import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLightSourceDimmerComponent } from './container-light-source-dimmer.component';

describe('ContainerLightSourceDimmerComponent', () => {
	let component: ContainerLightSourceDimmerComponent;
	let fixture: ComponentFixture<ContainerLightSourceDimmerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContainerLightSourceDimmerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContainerLightSourceDimmerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
