import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(data, csrf): Observable<any> {

    console.log('login', data, 'and', csrf);

    if (csrf) {

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-csrf-token': csrf
        })
      };

      return this.http.put(this.API_URL + '/login', data, httpOptions)

    }
    else {
      return this.http.put(this.API_URL + '/login', data)
    }

  }



}