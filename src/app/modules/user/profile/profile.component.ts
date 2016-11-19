import {Component, OnInit} from '@angular/core';
import { Auth } from '../.././shared-services/authorization/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit {

  user: any = {};
  constructor(private auth: Auth) {

  }

  ngOnInit() {
    if (this.auth.authenticated() === true) {
      // this.user = this.auth.getProfile(localStorage.getItem('id_token'));
      // console.log('this.user in profile.component', this.user);
    }
  }
}
