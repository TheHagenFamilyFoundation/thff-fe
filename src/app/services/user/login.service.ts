import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class LoginService {

  API_URL: string;

  constructor(private http: HttpClient, private authService: AuthService, ) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

  }

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