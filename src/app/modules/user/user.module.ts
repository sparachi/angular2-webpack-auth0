import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { ProfileComponent } from './profile/profile.component';
import { UserFooterComponent } from './footer/user-footer.component';
import { UserNavComponent } from './top-nav/usernav.component';
import { UserDetailsComponent } from './user-details/details.component';

// import { routing, appRoutingProviders } from './user.routing';
import { Auth } from '.././shared-services/authorization/auth.service';

// import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
    // routing
  ],
  declarations: [
    ProfileComponent,
    UserFooterComponent,
    UserNavComponent,
    UserDetailsComponent
  ],
  providers: [
    // appRoutingProviders,
    AUTH_PROVIDERS,
    Auth
  ],
  exports: [ProfileComponent]
})
export class UserModule {
  constructor(public appRef: ApplicationRef) {}

}
