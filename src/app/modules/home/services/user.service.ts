import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Injectable decorator means, we are going to inject something in this class
// in the constructor of this class.
@Injectable()
export class UserService {

}
