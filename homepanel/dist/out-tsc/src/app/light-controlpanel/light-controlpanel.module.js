import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
//Components
import { SwitchComponent } from './components/switch/switch.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DimmerComponent } from './components/dimmer/dimmer.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { ContainerLightSourceComponent } from './container/container-light-source/container-light-source.component';
// Container
// Pages
const routes = [
    {
        path: 'light/dashboard',
        component: PageDashboardComponent
    },
    {
        path: 'light/sources/:id/settings',
        component: PageDashboardComponent
    },
];
let LightControlpanelModule = class LightControlpanelModule {
};
LightControlpanelModule = __decorate([
    NgModule({
        declarations: [
            SwitchComponent,
            DimmerComponent,
            ColorPickerComponent,
            PageDashboardComponent,
            ContainerLightSourceComponent,
        ],
        providers: [],
        imports: [
            RouterModule.forChild(routes),
            CommonModule,
            MatGridListModule,
            MatListModule
        ]
    })
], LightControlpanelModule);
export { LightControlpanelModule };
//# sourceMappingURL=light-controlpanel.module.js.map