import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLightSourceLabelComponent } from './container-light-source-label.component';

describe('ContainerLightSourceLabelComponent', () => {
  let component: ContainerLightSourceLabelComponent;
  let fixture: ComponentFixture<ContainerLightSourceLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerLightSourceLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLightSourceLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
