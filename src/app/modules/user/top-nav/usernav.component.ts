import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../.././shared-services/authorization/auth.service';

@Component({
  selector: 'user-top-nav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.scss'],
  providers: [Auth]
})
export class UserNavComponent implements OnInit{

  @Input() loggedInUser: any;
  constructor(private auth: Auth, private route: ActivatedRoute, private router: Router) {
    // Do stuff
  }

  ngOnInit() {
    if (this.auth.authenticated() === true) {
      // console.log(localStorage.getItem('id_token'));
      // this.route.params.subscribe((response) => {
      //   console.log('data received ', response);
      // });
      // this.loggedInUser = this.auth.getProfile(localStorage.getItem('id_token'));
      // this.auth.getProfileObservable(localStorage.getItem('id_token')).subscribe(
      //   function (x)   { console.log('next', x); this.loggedInUser = x;
      //                   console.log('this.loggedInUser in UserNavComponent', this.loggedInUser); },
      //   function (err) { console.log('error', err); },
      //   function ()    { console.log('done');       }
      // );
      console.log('this.loggedInUser in UserNavComponent', this.loggedInUser);
    }
  }

}
