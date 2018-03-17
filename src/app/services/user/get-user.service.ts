import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetUserService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  //maybe make a getUser by ID
  getUserbyUsername(username: string): Observable<any> {

    let urlString = this.API_URL + "/user?username=" + username;

    return this.http.get(urlString);
  }

  getUserbyEmail(email: string): Observable<any> {

    let urlString = this.API_URL + "/user?email=" + email;

    return this.http.get(urlString);
  }


}