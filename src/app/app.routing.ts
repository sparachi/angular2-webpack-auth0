import { RouterModule, Routes }         from '@angular/router';
import { NgModule }                     from '@angular/core';

import { HomeComponent }                from './modules/home/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**' , component: HomeComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}



