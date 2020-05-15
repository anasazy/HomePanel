import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

// Components
import { SwitchComponent } from './components/switch/switch.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DimmerComponent } from './components/dimmer/dimmer.component';
import { SelectButtonComponent } from './components/select-button/select-button.component';
import { LightSourceTileComponent } from './components/light-source-tile/light-source-tile.component';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

// Light interaction Container
import { ContainerLightSourceSwitchComponent } from './container/container-light-source-switch/container-light-source-switch.component';
import { ContainerLightSourceDimmerComponent } from './container/container-light-source-dimmer/container-light-source-dimmer.component';
import { ContainerLightSourceColorPickerComponent } from './container/container-light-source-color-picker/container-light-source-color-picker.component';

// Container
import { ContainerLightSourceLabelComponent } from './container/container-light-source-label/container-light-source-label.component';
import { ContainerLightSourceComponent } from './container/container-light-source/container-light-source.component';
import { ContainerLightSourceListComponent } from './container/container-light-source-list/container-light-source-list.component';

// Pages
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { PageSettingsComponent } from './pages/page-settings/page-settings.component';

const routes: Routes = [
	{
		path: 'dashboard',
		component: PageDashboardComponent
	},
	{
		path: 'sources/:id/conf',
		component: PageSettingsComponent
	},
	{
		path: 'sources',
		component: PageListComponent
	},
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		SwitchComponent,
		DimmerComponent,
		ColorPickerComponent,
		PageDashboardComponent,
		ContainerLightSourceComponent,
		ContainerLightSourceSwitchComponent,
		ContainerLightSourceDimmerComponent,
		ContainerLightSourceColorPickerComponent,
		SelectButtonComponent,
		ContainerLightSourceLabelComponent,
		MenuButtonComponent,
		PageListComponent,
		ContainerLightSourceListComponent,
		LightSourceTileComponent,
		PageSettingsComponent,
	],
	providers: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatGridListModule,
		MatListModule
	]
})
export class LightControlpanelModule { }
