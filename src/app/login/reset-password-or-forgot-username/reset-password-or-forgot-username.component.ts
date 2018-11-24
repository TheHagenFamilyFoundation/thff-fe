import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-reset-password-or-forgot-username',
  templateUrl: './reset-password-or-forgot-username.component.html',
  styleUrls: ['./reset-password-or-forgot-username.component.css']
})
export class ResetPasswordOrUsernameComponent implements OnInit {

  title = "Reset Password Or Forgot Username"

  API_URL: string;

  constructor(private authService: AuthService, ) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }

    this.getBackendURL();

    console.log('this.API_URL', this.API_URL)


  }

  ngOnInit() {
  }

  getBackendURL() {

    if (environment.production) {

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

        })

    }

  }

}
