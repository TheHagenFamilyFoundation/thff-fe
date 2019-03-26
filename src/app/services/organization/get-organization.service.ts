import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class GetOrganizationService {

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

  //get Organization by director
  getOrgbyDirector(username: string): Observable<any> {

    let urlString = this.API_URL + "/organization?director=" + username;

    return this.http.get(urlString);
  }

  getOrgbyName(name: string): Observable<any> {

    let urlString = this.API_URL + "/organization?name=" + name;

    return this.http.get(urlString);
  }

  getOrgbyID(orgID: string): Observable<any> {

    let urlString = this.API_URL + "/organization?organizationID=" + orgID;

    return this.http.get(urlString);
  }

  getAllOrgs(): Observable<any> {

    let urlString = this.API_URL + "/organization?limit=500";

    return this.http.get(urlString);

  }

}
