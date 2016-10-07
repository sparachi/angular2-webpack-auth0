import { Component, AfterViewInit, enableProdMode } from '@angular/core';

import '../style/app.scss';

enableProdMode();
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  user: any = {};

  constructor() {
    // Do something with api
  }

  ngAfterViewInit() {

  }

}
