import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'light',
		loadChildren: () => import('./light-controlpanel/light-controlpanel.module').then(m => m.LightControlpanelModule),
	},
	{
		path: '',
		redirectTo: '/light',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
