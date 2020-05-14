import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LightControlpanelModule } from './light-controlpanel/light-controlpanel.module';
const routes = [
    { path: '', redirectTo: '/light', pathMatch: 'full' }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
        ],
        imports: [
            RouterModule.forRoot(routes),
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            LightControlpanelModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map