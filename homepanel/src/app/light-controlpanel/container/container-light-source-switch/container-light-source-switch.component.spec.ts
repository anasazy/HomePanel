import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLightSourceSwitchComponent } from './container-light-source-switch.component';

describe('ContainerLightSourceSwitchComponent', () => {
  let component: ContainerLightSourceSwitchComponent;
  let fixture: ComponentFixture<ContainerLightSourceSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerLightSourceSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLightSourceSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
