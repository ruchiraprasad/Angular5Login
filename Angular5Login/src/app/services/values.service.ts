import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Values } from '../models/values.model'

@Injectable()
export class ValuesService {

  valueList: Values[];

  constructor(private http : Http) { }

  getValueList(){
    this.http.get('http://localhost:1554/api/values',
    { headers: new Headers({'Authorization':'Bearer ' + localStorage.getItem('userToken')})}).subscribe(data => {
      console.log(data);
    });

    // this.http.get('http://localhost:1554/api/values')
    // .map((data : Response) =>{
    //   return data.json() as Values[];
    // }).toPromise().then(x => {
    //   this.valueList = x;
    // })
  }
}
