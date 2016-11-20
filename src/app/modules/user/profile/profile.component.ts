import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auth } from '../.././shared-services/authorization/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit {

  user: any = {};
  constructor(private auth: Auth, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.auth.authenticated() === true) {
      this.route.data.subscribe( profile => {
        console.log('this.user in profile component', this.user);
        this.user = profile;
      });
    }
  }
}
