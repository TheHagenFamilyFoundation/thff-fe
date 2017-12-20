import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Grant } from '../grant'

@Injectable()
export class GrantService {

  //API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  API_URL = 'http://localhost:1337';

  grants = Grant[];

  constructor(private http: HttpClient) { }

  // getGrants(): Observable<grant[]> {

  //   console.log("getGrants");

  //   let urlString = this.API_URL + '/grant'

  //   return this.http
  //     .get(urlString)
  //     .map(response => {
  //       const grants = response.json();
  //       return grants.map((grant) => new Grant(grant));
  //     });

  //   console.log("After request");


  //   //return this.grants;
  // }

}
