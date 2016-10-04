import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeDescribeComponent } from './home-describe/home-describe.component';
import { CoursesComponent } from './courses/courses.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactUsComponent } from './contactus/contactus.component';

import { ApiService } from './shared';
import { routing, appRoutingProviders } from './app.routing';
import { Auth } from './services/authorization/auth.service';
//import { Auth } from './auth/auth.service';
import { SubscribeService } from './services/subscribe/subscribe.service';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HomeDescribeComponent,
    CoursesComponent,
    PortfolioComponent,
    ContactUsComponent
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    ApiService,
    Auth,
    SubscribeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
