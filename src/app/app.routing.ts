import { RouterModule, Routes }         from '@angular/router';
import { ModuleWithProviders }          from '@angular/core';

import { HomeComponent }                from './home/home.component';
import { AboutComponent }               from './about/about.component';
import { ProfileComponent }             from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'profile', component: ProfileComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
