import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLightSourceListComponent } from './container-light-source-list.component';

describe('ContainerLightSourceListComponent', () => {
  let component: ContainerLightSourceListComponent;
  let fixture: ComponentFixture<ContainerLightSourceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerLightSourceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLightSourceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
