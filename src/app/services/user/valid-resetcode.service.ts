import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class ValidResetCodeService {

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

  checkValidResetCode(resetCode: string): Observable<any> {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {

      this.authService.initializeBackendURL();

      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)

      this.authService.clearBackendURL();

    }

    let urlString = this.API_URL + "/ResetCodeCheck?resetCode=" + resetCode;

    return this.http.get(urlString);
  }

}
