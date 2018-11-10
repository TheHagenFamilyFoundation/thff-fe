import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetLoiInfoService {

  API_URL: string;

  results;
  body;

  constructor(private http: HttpClient, private authService: AuthService) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

  }

  getLoiInfobyLoiID(loiID: string): Observable<any> {

    console.log('getLoiInfobyLoiID', loiID)

    let urlString = this.API_URL + "/loiInfo?loi=" + loiID;

    return this.http.get(urlString);

  }

  getOrgInfobyID(loiInfoID: string): Observable<any> {

    let urlString = this.API_URL + "/loiInfo?loiInfoID=" + loiInfoID;

    return this.http.get(urlString);

  }
}
