import { RouterModule, Routes }         from '@angular/router';
import { ModuleWithProviders }          from '@angular/core';

import { HomeComponent }                from './modules/home/home/home.component';
import { ProfileComponent }             from './modules/user/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: ProfileComponent},
  { path: '**' , component: HomeComponent}

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
