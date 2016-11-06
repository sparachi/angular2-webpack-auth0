import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SubscribeService } from '../services/subscribe.service';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'home-describe',
  templateUrl: './home-describe.component.html',
  styleUrls: ['./home-describe.component.scss'],
  providers: [SubscribeService]
})
export class HomeDescribeComponent {

  private subscriberEmail: string;
  private showMessage: boolean = false;

  // Constructor
 constructor(
    private subscriberService: SubscribeService
    ) {}

  addSubscriber(formData: any) {
    console.log(formData.subscriberEmail + ' is subscriber email address');
    // this.getSubscriber();
    let subscribeOperation: Observable<any>;

    subscribeOperation = this.subscriberService.addSubscriber(formData.subscriberEmail);
    subscribeOperation.subscribe(
      (response: any) => {
        // Log subscribers if any
        // console.log('In addSubscriber() subscribe method', response.data);
        if (response && response.data && (response.data).length > 0) {
          this.showMessage = true;
          //wait 3 Seconds and hide
         setTimeout(function() {
             this.showMessage = false;
             console.log(this.showMessage);
         }.bind(this), 5000);
        }
      },
      err => {
        // Log errors if any
        console.log(err);
      }
    );

  }

  getSubscribers() {
    let subscribeOperation: Observable<any[]>;

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
