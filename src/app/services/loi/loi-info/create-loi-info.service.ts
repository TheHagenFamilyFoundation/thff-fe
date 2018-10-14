import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CreateLoiInfoService {

  API_URL: string;

  results;
  body;

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

  createLoiInfo(body): Observable<any> {

    console.log('createLoiInfo');

    let urlString = this.API_URL + '/loiInfo';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    return this.http.post(urlString, this.body)

  }

}
