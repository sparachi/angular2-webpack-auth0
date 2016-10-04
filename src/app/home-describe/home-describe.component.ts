import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { SubscribeService } from '../services/subscribe/subscribe.service';

@Component({
  selector: 'home-describe',
  templateUrl: './home-describe.component.html',
  styleUrls: ['./home-describe.component.scss'],
  providers: [SubscribeService]
})
export class HomeDescribeComponent {

  private subscriberEmail:string;
  private successMessageLength:boolean;
  
  // Constructor
 constructor(
    private subscriberService: SubscribeService
    ){}

  addSubscriber() {
    console.log(this.subscriberEmail + " is subscriber email address");
    // this.getSubscriber();
    let subscribeOperation:Observable<any[]>;

    subscribeOperation = this.subscriberService.addSubscriber(this.subscriberEmail);
    subscribeOperation.subscribe(
      data => {
        // Log subscribers if any
        console.log(JSON.stringify(data));
        this.successMessageLength = (JSON.stringify(data)).length > 0;
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );

  }

  getSubscribers() {
    let subscribeOperation:Observable<any[]>;

    subscribeOperation = this.subscriberService.getSubscribers();
    subscribeOperation.subscribe(
      subscribers => {
        // Log subscribers if any
        console.log(JSON.stringify(subscribers));

      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );
  }
}
