import { RouterModule, Routes }         from '@angular/router';
import { NgModule }                     from '@angular/core';

import { ProfileComponent }             from './profile/profile.component';

import { ProfileResolver }              from './services/profile.resolve';
import { AuthGuard }                    from '.././shared-services/authorization/auth-gaurd.service';

const routes: Routes = [
  // this is first route  
  {
      path: 'user',
      component: ProfileComponent,
      canActivate: [AuthGuard],
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


