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

  API_URL = environment.API_URL;

  csrfToken: any;
  CSRF: any;

  userName$ = new Subject<string>();
  password$ = new Subject<string>();

  userName;
  password;

  body;

  data;
  results: any;

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
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.userName = term;
        this.usernameChange()
      });

    this.password$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.password = term;
        this.passwordChange()
      });

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

          this.csrfToken = data._csrf;

          console.log('csrfToken', this.csrfToken)


          let urlString = this.API_URL + '/login';

          this.body = {
            username: this.userName,
            password: this.password,
            _csrf: this.csrfToken
          }

          console.log(this.body);
          console.log('urlString', urlString);

          this.Login = this.loginService.login(this.body)
            .subscribe(
              (data) => {

                console.log('data', data)

              })

        })
    // this.http.put(urlString, this.body)
    //   .subscribe(data => {
    //     this.results = data;

    //     //console.log(data);

    //     if (this.results.user) {
    //       console.log("this.results.user = " + this.results.user)

    //       localStorage.setItem('token', this.results.token);
    //       localStorage.setItem('currentUser', JSON.stringify(this.results.user));

    //       console.log("token = " + localStorage.getItem('token'));
    //       console.log("currentUser = " + localStorage.getItem('currentUser'));

    //       this.authService.login();
    //     }
    //     else {
    //       this.message = this.results.message;
    //       this.ShowMessage = true;
    //     }

    //   });

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
