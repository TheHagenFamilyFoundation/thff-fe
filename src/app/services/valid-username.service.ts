import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ValidUserNameService {

  //API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  API_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  checkValidUserName(username: string): Observable<any> {

    let urlString = this.API_URL + "/UserNameExists?username=" + username;

    return this.http.get(urlString);
  }


}