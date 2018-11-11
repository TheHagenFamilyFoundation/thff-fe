import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Get501c3Service {

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

  get501c3(orgID: string): Observable<any> {


    let urlString = this.API_URL + "/get501c3/" + orgID;

    console.log('urlString', urlString)

    return this.http.get(urlString);
  }

  get501c3Info(orgID: string): Observable<any> {

    let urlString = this.API_URL + "/org501c3?orgID=" + orgID;

    console.log('urlString', urlString)

    return this.http.get(urlString);
  }

}
