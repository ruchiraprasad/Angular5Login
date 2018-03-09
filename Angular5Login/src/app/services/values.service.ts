import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Values } from '../models/values.model'

@Injectable()
export class ValuesService {

  valueList: Values[];

  constructor(private http : HttpClient) { }

  getValueList(){
    this.http.get('http://localhost:1554/api/values').subscribe(data => {
      console.log(data);
    });

//,
//{ headers: new Headers({'Authorization':'Bearer ' + localStorage.getItem('userToken')})}


    // this.http.get('http://localhost:1554/api/values')
    // .map((data : Response) =>{
    //   return data.json() as Values[];
    // }).toPromise().then(x => {
    //   this.valueList = x;
    // })
  }
}
