import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve }  from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { Auth } from '../.././shared-services/authorization/auth.service';

@Injectable()
export class ProfileResolver implements Resolve<any> {
  constructor(private auth: Auth) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
      console.log('in ProfileResolver ');
    return this.auth.getProfile(localStorage.getItem('id_token'));
  }
}