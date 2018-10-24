
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class EmailService {

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

  //debug
  sendEmail(data) {
    return this.http.post(this.API_URL + '/email/', data)
    //.map(res => res.json())
    //.catch(this._errorHandler);
  }

  sendResetEmail(data) {
    return this.http.post(this.API_URL + '/sendResetEmail', data)
  }

  sendRegisterUserEmail(data) {
    return this.http.post(this.API_URL + '/sendRegisterUserEmail', data)
  }

  sendRegisterOrganizationEmail(data) {
    return this.http.post(this.API_URL + '/sendRegisterOrgEmail', data)
  }

  sendResetEmailConfirmation(data) {
    return this.http.post(this.API_URL + '/sendResetEmailConfirmation', data)
  }

  sendUserNameEmail(data) {
    return this.http.post(this.API_URL + '/sendUserNameEmail', data)
  }

  private _errorHandler(error: Response) {
    console.error(error);
    return observableThrowError(error || 'Server Error')
  }

}