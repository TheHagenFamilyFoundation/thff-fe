import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Upload501c3Service {

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

  // file from event.target.files[0]
  upload501c3(file: File, orgID: string): Observable<any> {

    console.log('upload501c3');

    let urlString = this.API_URL + '/upload501c3';

    let formData = new FormData();
    formData.append('avatar', file);

    let params = new HttpParams()

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', urlString, formData, options);

    console.log('req', req)

    return this.http.request(req);

  }


}
