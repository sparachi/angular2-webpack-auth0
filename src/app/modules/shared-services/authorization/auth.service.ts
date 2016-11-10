import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AuthConfig } from '../../.././config/auth0.config';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
  id_token: any;
  API_ON_LOGIN_URL = 'http://127.0.0.1:5000/api/authenticate/onlogin';

  constructor(private http: Http, zone: NgZone, private router: Router) {
    this.zoneImpl = zone;
    //this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      this.id_token = authResult.idToken;
      this.onLogin();
      this.router.navigate(['user']);
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

  public getProfile(): any{
    // Fetch profile information
    this.lock.getProfile(this.id_token, (error, profile) => {
      if (error) {
        // Handle error
        alert(error);
        return;
      }
      // profile.user_metadata = profile.user_metadata || {};
      // localStorage.setItem('profile', JSON.stringify(profile));
      console.log('profile data is ', profile);
      this.userProfile = profile;
      console.log('this.userProfile data is ', profile);
    });

    return this.userProfile;
  }

  onLogin(){
    let sendLoginOperation: Observable<any>;
    sendLoginOperation = this.callOnLoginApi();
    sendLoginOperation.subscribe(
      (response: any) => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    )
  }

  // Add a new comment
  callOnLoginApi(): Observable<any> {
    let bodyData = {
      'id_token' : this.id_token,
      'profile' : this.getProfile()
    };
    // ... Set content type to JSON
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    // Create a request option
    let options       = new RequestOptions({ headers: headers });
    console.log('In addProfile() of auth.service');
    return this.http.post(this.API_ON_LOGIN_URL, bodyData, headers)
            .map((resp: Response) => {
                                        console.log('In map() ', resp.json());
                                        return resp.json();
                                      })
          .catch( this.handleError );
 }

 handleError(error: any) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
