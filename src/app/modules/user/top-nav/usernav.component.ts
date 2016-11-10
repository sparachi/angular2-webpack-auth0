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

  ngAfterViewInit() {
    if(this.auth.authenticated() === true) {
      this.loggedInUser = this.auth.getProfile());
      console.log(this.loggedInUser);
    }
  }

}
