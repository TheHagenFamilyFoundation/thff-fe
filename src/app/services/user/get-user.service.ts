import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class GetUserService {

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

  //maybe make a getUser by ID
  getUserbyUsername(username: string): Observable<any> {

    let urlString = this.API_URL + "/user?username=" + username;

    return this.http.get(urlString);
  }

  getUserbyEmail(email: string): Observable<any> {

    let urlString = this.API_URL + "/user?email=" + email;

    return this.http.get(urlString);
  }

  getUserbyID(userID: string): Observable<any> {

    let urlString = this.API_URL + "/user?id=" + userID;

    return this.http.get(urlString);
  }

  getAllUsers(): Observable<any> {
    let urlString = this.API_URL + "/user";

    return this.http.get(urlString);
  }


}