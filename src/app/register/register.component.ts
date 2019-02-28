import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

//Environment
import { environment } from '../../environments/environment';

//Services
import { AuthService } from '../auth/auth.service';
import { ValidEmailService } from '../services/user/valid-email.service';
import { ValidUserNameService } from '../services/user/valid-username.service';
import { EmailService } from '../services/user/email.service';

//for deboucne
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HttpClient]
})
export class RegisterComponent implements OnInit {

  title = "Register";

  API_URL: string;

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
  Submitted = false;

  userNameFormControl = new FormControl('', [
    Validators.required,
  ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ])

  cpasswordFormControl = new FormControl('', [
    Validators.required,
  ])

  matcher = new MyErrorStateMatcher();

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private validEmailService: ValidEmailService,
    private validUserNameService: ValidUserNameService,
    private emailService: EmailService
  ) {

    //debounce
    this.userName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.userName = term;
        this.usernameChange()
      });

    this.email$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.email = term;
        this.emailChange()
      });

    this.password$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.password = term;
        this.passwordChange()
      });

    this.confirmPassword$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.confirmPassword = term;
        this.confirmPasswordChange()
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
  }

  register(): void {
    console.log("You clicked on the Register")

    this.CanRegister = false;
    this.Submitted = true;

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

        localStorage.setItem('token', this.results.token);
        localStorage.setItem('currentUser', JSON.stringify(this.results.user));

        console.log("token = " + localStorage.getItem('token'));
        console.log("currentUser = " + localStorage.getItem('currentUser'));
        console.log("this.userName = " + this.userName);
        console.log("this.email = " + this.email);

        this.emailService.sendRegisterUserEmail({
          //from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
          to: this.email,
          name: this.userName,
        })
          .subscribe(
            (data) => {

              console.log('now login', data)

              this.router.navigate(['/user']);

            },
            err => console.log(err)
          );

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

    if (this.email != "" && !this.emailFormControl.hasError('email')) {
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
            this.ValidUserName = false;
          }
          else {
            console.log("user not found");

            this.ShowUserNameError = false;
            this.ValidUserName = true;

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
            this.ValidEmail = false;
          }
          else {
            console.log("email not found");

            this.ShowEmailError = false;
            this.ValidEmail = true;

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
