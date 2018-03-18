import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Environment
import { environment } from '../../environments/environment';

//Services
import { AuthService } from '../auth/auth.service';
import { ValidEmailService } from '../services/user/valid-email.service';
import { ValidUserNameService } from '../services/user/valid-username.service';
import { EmailService } from '../services/user/email.service';

//for deboucne
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HttpClient]
})
export class RegisterComponent implements OnInit {

  title = "Register";

  API_URL = environment.API_URL;

  body;


  userName$ = new Subject<string>();
  email$ = new Subject<string>();
  password$ = new Subject<string>();
  confirmPassword$ = new Subject<string>();

  userName;
  email;
  password;
  confirmPassword;

  data;
  results: any;

  NoMatchPassword = true;
  ShowConfirmPassword = false;

  ValidUserName: any;
  ValidEmail: any;

  ValidPassword = false;

  ShowUserNameError = false;
  ShowEmailError = false;
  ShowPasswordError = false;

  CanRegister = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private validEmailService: ValidEmailService,
    private validUserNameService: ValidUserNameService,
    private emailService: EmailService
  ) {

    //debounce
    this.userName$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.userName = term;
        this.usernameChange()
      });

    this.email$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.email = term;
        this.emailChange()
      });

    this.password$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.password = term;
        this.passwordChange()
      });

    this.confirmPassword$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.confirmPassword = term;
        this.confirmPasswordChange()
      });

  }

  ngOnInit() {
  }

  register(): void {
    console.log("You clicked on the Register")

    let urlString = this.API_URL + '/user';

    this.body = {
      username: this.userName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    console.log(this.body);
    console.log(urlString);

    //send to api

    this.http.post(urlString, this.body)
      .subscribe(data => {
        this.results = data;

        /*debug
  
        console.log(data);
        console.log("this.results");
        console.log(this.results);
        console.log(this.results.token);
        */

        localStorage.setItem('token', this.results.token);
        localStorage.setItem('currentUser', JSON.stringify(this.results.user));

        console.log("token = " + localStorage.getItem('token'));
        console.log("currentUser = " + localStorage.getItem('currentUser'));

        this.emailService.sendRegisterUserEmail({
          from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
          to: this.email,
          name: this.userName,
        })
          .subscribe(
            () => { },
            err => console.log(err)
          );

        this.authService.login();

      });

  }//end of register function

  usernameChange() {
    console.log("UsernameChange");

    if (this.userName != "") {

      this.ValidUserCheck();

    }
    else {

      this.ValidUserName = false;

    }

    this.VerifyInput();
  }

  emailChange() {
    console.log("EmailChange");

    if (this.email != "") {
      //this.ValidEmail = true;
      this.ValidEmailCheck();
    }
    else {
      this.ValidEmail = false;
    }

    this.VerifyInput();
  }

  passwordChange() {
    console.log("PasswordChange");

    if (this.password != "") {
      this.ShowConfirmPassword = true;
    }
    else {
      this.ShowConfirmPassword = false;
      this.confirmPassword = "";
      this.ValidPassword = false;
    }

    this.VerifyInput();

  }


  confirmPasswordChange() {
    console.log("ConfirmPasswordChange");

    this.ComparePasswords();
  }

  ComparePasswords(): void {

    if (this.password != this.confirmPassword) {
      this.NoMatchPassword = false;
      //debug
      console.log("NoMatchPassword = " + this.NoMatchPassword);

      this.ValidPassword = false;

      this.VerifyInput();
    }
    else {

      //if the passwords match
      this.NoMatchPassword = true;
      //debug
      console.log("NoMatchPassword = " + this.NoMatchPassword);

      this.ValidPassword = true;

      this.VerifyInput();
    }

  }//end of ComparePasswords

  ValidUserCheck(): void {

    this.ValidUserName = this.validUserNameService.checkValidUserName(this.userName)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.userfound) {
            console.log("user found");

            this.ShowUserNameError = true;
          }
          else {
            console.log("user not found");

            this.ShowUserNameError = false;

          }

          this.VerifyInput();

        });

  }

  ValidEmailCheck(): void {

    this.ValidEmail = this.validEmailService.checkValidEmail(this.email)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.emailfound) {
            console.log("email found");

            this.ShowEmailError = true;
          }
          else {
            console.log("email not found");

            this.ShowEmailError = false;

          }

          this.VerifyInput();

        });

  }

  VerifyInput(): void {
    if (this.ValidUserName && this.ValidEmail && this.ValidPassword) {
      this.CanRegister = true;
    }
    else {
      this.CanRegister = false;
    }
  }

}
