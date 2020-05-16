import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLightSourceColorPickerComponent } from './container-light-source-color-picker.component';

describe('ContainerLightSourceColorPickerComponent', () => {
	let component: ContainerLightSourceColorPickerComponent;
	let fixture: ComponentFixture<ContainerLightSourceColorPickerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ContainerLightSourceColorPickerComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContainerLightSourceColorPickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
