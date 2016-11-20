import { Injectable }               from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot
}                                   from '@angular/router';

import { Auth }                     from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    id_token: any;

    constructor(private authService: Auth) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.id_token = localStorage.getItem('id_token');
        // console.log(this.id_token);
        if (this.id_token != null) {
            console.log('AuthGuard#canActivate returns true');
            return true;
        } else {
            console.log('AuthGuard#canActivate checks login');
            return this.checkLogin();
        }
    }

    checkLogin(): boolean {
        this.authService.login();
        return false;
    }
}
