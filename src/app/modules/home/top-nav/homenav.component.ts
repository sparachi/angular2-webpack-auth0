import { Component, Input } from '@angular/core';

import { Auth } from '../.././shared-services/authorization/auth.service';

@Component({
  selector: 'homenav',
  templateUrl: './homenav.component.html',
  styleUrls: ['./homenav.component.scss']
})
export class HomeNavComponent {

  @Input() loggedInUser: any = {};
  constructor(private auth: Auth) {
    // Do stuff
  }

}
