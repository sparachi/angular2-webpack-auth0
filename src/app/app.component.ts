import { Component, OnInit } from '@angular/core';

import { ApiService } from './shared';
import { Auth }       from './services/authorization/auth.service';
// import { Auth }       from './auth/auth.service';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  url = 'https://github.com/preboot/angular2-webpack';
  user: any;
  constructor(private api: ApiService, private auth: Auth) {
    // Do something with api
  }

  ngOnInit() {
    if (this.auth.authenticated() === true && localStorage.getItem('profile') != null) {
      console.log(JSON.parse(localStorage.getItem('profile')));
    }
  }

}
