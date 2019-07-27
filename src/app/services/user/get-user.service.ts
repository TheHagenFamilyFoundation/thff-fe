import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class GetUserService {

  API_URL: string;

  constructor(private http: HttpClient, private authService: AuthService, ) {

    this.getBackendURL();

    console.log('this.API_URL', this.API_URL)

  }

  getBackendURL() {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

  }

  //maybe make a getUser by ID
  getUserbyUsername(username: string): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/user?username=" + username;

    return this.http.get(urlString);
  }

  getUserbyEmail(email: string): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/user?email=" + email;

    return this.http.get(urlString);
  }

  getUserbyID(userID: string): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/user?id=" + userID;

    return this.http.get(urlString);
  }

  getUsersCount(body: any): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/users/count"

    if (body.org) {
      urlString += '?org=' + body.org; //mongo id
    }

    return this.http.get(urlString);

  }

  getAllUsers(paging: any): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/user";

    // console.log('paging limit', paging.limit)
    // console.log('paging skip', paging.skip)

    // if (paging.limit && paging.skip) {
    urlString += '?skip=' + paging.skip + '&limit=' + paging.limit;
    // }

    if (paging.org) {
      urlString += '&notorg=' + paging.org; //mongo id
    }

    console.log('this.urlString', urlString)

    return this.http.get(urlString);
  }

  getDirectors(): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/directors";

    return this.http.get(urlString);
  }

  getOrgUsers(orgID: string): Observable<any> {

    this.getBackendURL();

    let urlString = this.API_URL + "/orgUsers/" + orgID;

    return this.http.get(urlString);
  }



}