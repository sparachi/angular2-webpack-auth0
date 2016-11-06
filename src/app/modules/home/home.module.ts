import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeDescribeComponent } from './home-describe/home-describe.component';
import { CoursesComponent } from './courses/courses.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { HomeNavComponent } from './top-nav/homenav.component';
import { HomeFooterComponent } from './footer/home-footer.component';

// import { routing, appRoutingProviders } from './home.routing';
import { Auth } from '.././shared-services/authorization/auth.service';
import { SubscribeService } from './services/subscribe.service';
import { UserService } from './services/user.service';

// import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
    // routing
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    HomeDescribeComponent,
    CoursesComponent,
    PortfolioComponent,
    ContactUsComponent,
    HomeNavComponent,
    HomeFooterComponent
  ],
  providers: [
    // appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    SubscribeService,
    UserService
  ],
  exports: [HomeComponent]
})
export class HomeModule {
  constructor(public appRef: ApplicationRef) {}

}
