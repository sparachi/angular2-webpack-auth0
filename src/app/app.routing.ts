import { RouterModule, Routes }         from '@angular/router';
import { ModuleWithProviders }          from '@angular/core';

import { HomeComponent }                from './home/home.component';
import { AboutComponent }               from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
