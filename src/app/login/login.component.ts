import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../auth/auth.service';
import { GetCSRFTokenService } from '../services/auth/get-csrf-token.service';
import { LoginService } from '../services/user/login.service';

import { environment } from '../../environments/environment';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login"

  API_URL: string;

  csrfToken: any;
  CSRF: any;

  userName$ = new Subject<string>();
  password$ = new Subject<string>();

  userName;
  password;

  body;

  ShowMessage = false;
  message: any;

  Login: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private getCSRFTokenService: GetCSRFTokenService,
    private loginService: LoginService
  ) {

    this.userName$.pipe(
      debounceTime(100),
      distinctUntilChanged())
      .subscribe(term => {

        this.userName = term;
        this.usernameChange()
      });

    this.password$.pipe(
      debounceTime(100),
      distinctUntilChanged())
      .subscribe(term => {

        this.password = term;
        this.passwordChange()
      });

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)


  }

  ngOnInit() {

    //this.getCSRF();

  }

  getCSRF() {

    console.log('getCSRF');

    this.CSRF = this.getCSRFTokenService.getCSRF()
      .subscribe(
        (data) => {

          this.csrfToken = data._csrf;

          console.log('csrfToken', this.csrfToken)

        })

  }

  login(): void {
    console.log("You clicked on the Login")

    console.log("userName = " + this.userName);
    console.log("password = " + this.password);

    this.CSRF = this.getCSRFTokenService.getCSRF()
      .subscribe(
        (data) => {

          console.log('after CSRF', this.API_URL)

          if (data._csrf) {
            this.csrfToken = data._csrf;
          }

          let urlString = this.API_URL + '/login';

          this.body = {
            username: this.userName,
            password: this.password,
            // _csrf: this.csrfToken //|| undefined
          }

          if (this.csrfToken) {
            this.body._csrf = this.csrfToken;
          }

          console.log('this.body', this.body);
          console.log('urlString', urlString);

          this.Login = this.authService.login(this.body, this.csrfToken)
            .subscribe(
              (data) => {

                console.log('data', data)
                let user = data.user
                console.log('user', user)


                if (user) {
                  console.log("this.results.user = ", user)

                  localStorage.setItem('token', data.token);
                  localStorage.setItem('currentUser', JSON.stringify(user));

                  console.log("token = " + localStorage.getItem('token'));
                  console.log("currentUser = " + localStorage.getItem('currentUser'));

                  this.router.navigate(['/home']);

                }
                else {
                  this.message = data.message;
                  this.ShowMessage = true;
                }

              },
              error => {

                console.log('error', error)

                this.message = error;

                console.log('message', this.message)

                this.ShowMessage = true;
              }
            )

        })

  }

  register(): void {
    console.log("You clicked on the Register")
    this.router.navigate(['/register']);
  }

  usernameChange() {
    console.log("usernameChange");

    this.ShowMessage = false;

  }

  passwordChange() {
    console.log("passwordChange");

    this.ShowMessage = false;

  }

}
