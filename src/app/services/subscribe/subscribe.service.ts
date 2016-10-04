import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {AuthHttp} from 'angular2-jwt';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Auth} from '../authorization/auth.service';
//import {Auth} from '../../auth/auth.service';

@Injectable()
export class SubscribeService {
  title = 'Angular 2';

  // Resolve HTTP using the constructor
  constructor (private http: Http, private authHttp: AuthHttp, private auth: Auth) {}
  // private instance variable to hold base url
  private subscribeService = 'http://localhost:5000/api/subscriber';
  private API_URL = 'http://localhost:5000';

  // Fetch all existing comments
 getSubscribers() : Observable<any[]> {

     // ...using get request
     return this.http.get(this.subscribeService)
                    // ...and calling .json() on the response to return data
                     .map((res:Response) => res.json())
                     //...errors if any
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

  // Add a new comment
 addSubscriber (subscriberEmail:string): Observable<any> {
    let bodyData = {
      "subscriberEmail" : subscriberEmail
    }
     let bodyString = JSON.stringify(bodyData); // Stringify payload
     let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     let options       = new RequestOptions({ headers: headers }); // Create a request option

    //  return this.http.post(this.subscribeService, bodyData, options) // ...using post request
    //                   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    //                   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    return this.authHttp.get(`${this.API_URL}/api/authenticate`)
      .map(res => {console.log("In map() " + res);res.json();})
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      // .subscribe(
      //   data => {console.log("In subscribe()" + data);},
      //   error => {console.log(error._body);}
      // );
 }

 securedPing() {
    return this.authHttp.get(`${this.API_URL}/api/authenticate`)
      .map(res => {console.log("In map()" + res);res.json();})
      .subscribe(
        data => {console.log("In subscribe()" + data);},
        error => {console.log(error._body);}
      );
  }
}
