import { Component, AfterViewInit } from '@angular/core';
import { Auth } from '../.././shared-services/authorization/auth.service';
@Component({
  selector: 'toppertips-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  user: any;
  constructor(private auth: Auth) {
    // Do stuff
  }

  // ngOnInit() {
  //   console.log('Hello Home ngOnInit');
  //   console.log(this.auth.authenticated());
  //
  //   if(this.auth.authenticated() === true && localStorage.getItem('profile') != null) {
  //     this.user = localStorage.getItem('profile');
  //     console.log(this.user);
  //   }
  // }

  ngAfterViewInit(){
    console.log('Hello Home ngAfterViewInit');
    console.log(this.auth.authenticated());

    if(this.auth.authenticated() === true && localStorage.getItem('profile') != null) {
      this.user = JSON.parse(localStorage.getItem('profile'));
      console.log(this.user);
    }
  }

}
