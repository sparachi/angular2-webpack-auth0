import { Component, Input } from '@angular/core';

import { Auth } from '../.././shared-services/authorization/auth.service';

@Component({
  selector: 'user-top-nav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss']
})
export class UserNavComponent {

  @Input() loggedInUser: any = {};
  constructor(private auth: Auth) {
    // Do stuff
  }

  // ngAfterViewInit() {
  //   if(this.auth.authenticated() === true && localStorage.getItem('profile') != null) {
  //     this.loggedInUser = JSON.parse(localStorage.getItem('profile'));
  //   }
  // }

}
