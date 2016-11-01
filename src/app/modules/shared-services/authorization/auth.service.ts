import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import {AuthConfig} from '../../.././config/auth0.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Replace YOUR_CLIENT_ID and YOUR_DOMAIN with your credentials
  lock = new Auth0Lock(AuthConfig.clientID, AuthConfig.domain);
  refreshSubscription: any;
  user: Object;
  zoneImpl: NgZone;
  // Store profile object in auth class
  userProfile: any;

  constructor(private authHttp: AuthHttp, zone: NgZone, private router: Router) {
    this.zoneImpl = zone;
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
        this.router.navigate(['user']);
      });
    });
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    return tokenNotExpired();
  }

  public login() {
    console.log('In login()');
    // Show the Auth0 Lock widget
    this.lock.show();
  }

  public logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this.zoneImpl.run(() => this.user = null);
    this.router.navigate(['']);
  }
}
