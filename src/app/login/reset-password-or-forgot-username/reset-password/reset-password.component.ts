import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { environment } from '../../../../environments/environment';

//services
import { ValidEmailService } from '../../../services/user/valid-email.service';
import { ValidUserNameService } from '../../../services/user/valid-username.service';
import { EmailService } from '../../../services/user/email.service';
import { ResetCodeService } from '../../../services/user/reset-code.service';

import { AuthService } from '../../../auth/auth.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title = "Reset Password"

  API_URL: string;

  userName$ = new Subject<string>();
  email$ = new Subject<string>();

  userName: any;
  email: any;

  response: any;

  ValidUserName: any;
  ValidEmail: any;

  ShowUserNameError = false;
  ShowEmailError = false;

  CanResetPassword = false; //initialize to false

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private validEmailService: ValidEmailService,
    private validUserNameService: ValidUserNameService,
    private _emailService: EmailService,
    private _resetService: ResetCodeService,
    private authService: AuthService,
  ) {

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

  resetPassword(): void {

    console.log("You clicked on the Reset Password")

    //this works
    let snackBarRef = this.snackBar.open('Please check your email for reset instructions.', 'OK', {
      duration: 3000
    });

    //create random function that creates a password
    //call the createResetCode
    this._resetService.createResetCode({
      email: this.email
    })
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.resetCodeCreated) {
            let message = "Your password is reset"
            console.log("after")
            this._emailService.sendResetPasswordEmail({
              from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
              to: this.email,
              name: this.userName,
              text: message,
              resetCode: data.resetCode,
              //resetTime: data.resetTime
            })
              .subscribe(
                () => { },
                err => console.log(err)
              );

          }
          else {
            console.log("Unable to reset password");

          }

        })

    this.router.navigate(['/login']);

  }//end of resetPassword

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

  ValidUserCheck(): void {

    this.ValidUserName = this.validUserNameService.checkValidUserName(this.userName)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.userfound) {
            console.log("user found");

            this.ShowUserNameError = false;
          }
          else {
            console.log("user not found");

            this.ShowUserNameError = true;

          }

          this.VerifyInput();

        });

  }//end of ValidUserCheck

  ValidEmailCheck(): void {

    this.ValidEmail = this.validEmailService.checkValidEmail(this.email)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.emailfound) {
            console.log("email found");

            this.ShowEmailError = false;
          }
          else {
            console.log("email not found");

            this.ShowEmailError = true;

          }

          this.VerifyInput();

        });

  }//end of ValidEmailCheck

  VerifyInput(): void {
    if (this.ValidUserName && this.ValidEmail) {
      this.CanResetPassword = true;
    }
    else {
      this.CanResetPassword = false;
    }
  }

}
