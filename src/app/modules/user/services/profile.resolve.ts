import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve }  from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { Auth } from '../.././shared-services/authorization/auth.service';

@Injectable()
export class ProfileResolver implements Resolve<any> {
  constructor(private auth: Auth, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any>   {
      let id_token = localStorage.getItem('id_token');
      return this.auth.getProfilePromise(id_token).then(profile => {
        console.log('in ProfileResolver ', profile);
        if (profile) {
          return profile;
        } else {
          this.router.navigate(['']);
          return false;
        }
      });
  }
}
