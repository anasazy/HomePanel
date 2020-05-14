import { async, TestBed } from '@angular/core/testing';
import { ContainerLightSourceComponent } from './container-light-source.component';
describe('ContainerLightSourceComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContainerLightSourceComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerLightSourceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=container-light-source.component.spec.js.map