import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';


import { LightControlpanelModule } from './light-controlpanel/light-controlpanel.module';


const routes: Routes = [
 {path: '', redirectTo: '/light', pathMatch: 'full'}
  ];

@NgModule({
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
export class AppModule { }
