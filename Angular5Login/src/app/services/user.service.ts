import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  selectedUser: User;

  constructor(private http: Http) { }

  userAuthentication(user: User){
    var body = JSON.stringify(user);

    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:1554/api/User/authenticate',body,requestOptions).map(x => x.json());
  }

}
