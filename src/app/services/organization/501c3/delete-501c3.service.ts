import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

import { AuthService } from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class Delete501c3Service {

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

  delete501c3byOrgID(orgID: string): Observable<any> {

    console.log('delete501c3byOrgID')

    let urlString = this.API_URL + "/delete501c3/" + orgID;

    return this.http.delete(urlString);

  }

}
