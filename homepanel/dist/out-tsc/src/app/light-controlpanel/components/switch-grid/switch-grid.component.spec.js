import { async, TestBed } from '@angular/core/testing';
import { SwitchGridComponent } from './switch-grid.component';
describe('SwitchGridComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SwitchGridComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SwitchGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=switch-grid.component.spec.js.map