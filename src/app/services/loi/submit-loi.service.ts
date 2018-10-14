import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitLoiService {

  API_URL: string;

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

  submitLOI(loiID: string): Observable<any> {

    console.log('loiID', loiID)

    return this.http.get(this.API_URL + '/submitLOI/' + loiID)
  }

}
