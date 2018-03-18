import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login"

  API_URL = environment.API_URL;

  userName$ = new Subject<string>();
  password$ = new Subject<string>();

  userName;
  password;

  body;

  data;
  results: any;

  ShowMessage = false;
  message: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
  ) {

    this.userName$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.userName = term;
        this.usernameChange()
      });

    this.password$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.password = term;
        this.passwordChange()
      });
      
  }

  ngOnInit() {
  }

  login(): void {
    console.log("You clicked on the Login")

    console.log("userName = " + this.userName);
    console.log("password = " + this.password);

    let urlString = this.API_URL + '/auth';

    this.body = {
      username: this.userName,
      password: this.password
    }

    console.log(this.body);
    console.log(urlString);

    this.http.post(urlString, this.body)
      .subscribe(data => {
        this.results = data;

        //console.log(data);

        if (this.results.user) {
          console.log("this.results.user = " + this.results.user)

          localStorage.setItem('token', this.results.token);
          localStorage.setItem('currentUser', JSON.stringify(this.results.user));

          console.log("token = " + localStorage.getItem('token'));
          console.log("currentUser = " + localStorage.getItem('currentUser'));

          this.authService.login();
        }
        else {
          this.message = this.results.message;
          this.ShowMessage = true;
        }

      });

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
