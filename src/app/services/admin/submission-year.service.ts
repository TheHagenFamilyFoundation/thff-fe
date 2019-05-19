import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SubmissionYearService {

  API_URL: string;

  data: any;

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

  createFieldopenFp(): Observable<any> {

    //empty
    let data = {};

    console.log('data', data)

    return this.http.post(this.API_URL + '/createFieldopenFp', data)
  }

  createSubmissionYear(): Observable<any> {

    let today = new Date();
    let currentYear = today.getFullYear();

    let data = {
      year: currentYear
    };

    console.log('data', data)

    return this.http.post(this.API_URL + '/submissionyear', data)
  }


}
