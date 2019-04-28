import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetLoiService {

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

  getLOIbyID(loiID: string): Observable<any> {

    let urlString = this.API_URL + "/loi?loiID=" + loiID;

    return this.http.get(urlString);
  }

  //retrieves the LOIs that this user has created
  getLOIbyuserID(userID: string): Observable<any> {

    let urlString = this.API_URL + "/loi?userid=" + userID;

    return this.http.get(urlString);
  }

  //retrieves the LOIs of an org
  getLOIbyorgID(orgID: string): Observable<any> {

    let urlString = this.API_URL + "/loi?org=" + orgID;

    return this.http.get(urlString);
  }

  getAllLOIs(): Observable<any> {

    let urlString = this.API_URL + "/loi?limit=500";

    console.log('urlString', urlString)
    return this.http.get(urlString);

  }

  getPresVotes(data: any): Observable<any> {

    console.log('getPresVotes - data', data)

    let urlString = this.API_URL + "/presVotes";

    if (data) {
      urlString += '?vote=' + data
    }

    console.log('getPresVotes - urlString', urlString)

    return this.http.get(urlString);

  }

}
