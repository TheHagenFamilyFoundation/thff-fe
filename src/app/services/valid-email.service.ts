import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ValidEmailService {

  //API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  API_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  checkValidEmail(email: string): Observable<any> {

    let urlString = this.API_URL + "/EmailExists?email=" + email;

    return this.http.get(urlString);
  }

}
