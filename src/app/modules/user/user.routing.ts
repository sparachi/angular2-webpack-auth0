import { RouterModule, Routes }         from '@angular/router';
import { NgModule }                     from '@angular/core';

import { ProfileComponent }                from './profile/profile.component';

import { ProfileResolver }               from './services/profile.resolve';

const routes: Routes = [
  // this is first route  
  {
      path: 'user',
      component: ProfileComponent,
      resolve: {
          ProfileResolver
      }
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {}


