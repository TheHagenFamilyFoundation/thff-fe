import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class ValidUserNameService {

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

  checkValidUserName(username: string): Observable<any> {

    if (!environment.production) {

      this.API_URL = environment.API_URL;

      let urlString = this.API_URL + "/UserNameExists?username=" + username;

      return this.http.get(urlString);

    }
    else {

      console.log('backendURL', sessionStorage.getItem('backend_url'))

      let backendURL = sessionStorage.getItem('backend_url');

      if (backendURL == null) {
        console.log('no backendurl')

        this.authService.initializeBackendURL().subscribe(
          (backendUrl) => {

            console.log('backendUrl', backendUrl.url);

            if (backendUrl) {
              sessionStorage.setItem('backend_url', backendUrl.url);
            }
            else {
              console.log('Can´t find the backend URL, using a failover value');
              sessionStorage.setItem('backend_url', 'https://failover-url.com');
            }

            this.API_URL = backendUrl.url;

            let urlString = this.API_URL + "/UserNameExists?username=" + username;

            console.log('urlString', urlString)

            return this.http.get(urlString);

          })

      }
      else {

        this.API_URL = this.authService.getBackendURL();
        console.log('this.API_URL', this.API_URL)

        let urlString = this.API_URL + "/UserNameExists?username=" + username;

        console.log('urlString', urlString)

        return this.http.get(urlString);

      }

    }

  }


}
