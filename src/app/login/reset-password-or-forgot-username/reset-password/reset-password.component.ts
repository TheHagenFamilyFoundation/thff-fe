import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ValidEmailService } from '../../../services/valid-email.service';
import { ValidUserNameService } from '../../../services/valid-username.service';
import { environment } from '../../../../environments/environment';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title = "Reset Password"

  API_URL = environment.API_URL;

  userName: any;
  email: any;

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
    private _emailService: EmailService
  ) { }

  ngOnInit() {
  }

  resetPassword(): void {

    console.log("You clicked on the Reset Password")

    let snackBarRef = this.snackBar.open('Please check your email for reset instructions.', 'OK', {
      duration: 3000
    });

    //create random function that creates a password

    let message = "Your password is reset"

    this._emailService.sendEmail({
      from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
      to: this.email,
      name: name,
      text: message,
    })
      .subscribe(
      () => { },
      err => console.log(err)
      );

    this.router.navigate(['/login']);

  }

  UsernameChange(event) {
    console.log("UsernameChange");

    console.log(event);

    if (this.userName != "") {

      this.ValidUserCheck();

    }
    else {

      this.ValidUserName = false;

    }

    this.VerifyInput();
  }

  EmailChange(event) {
    console.log("EmailChange");

    console.log(event);

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

          this.ShowEmailError = false;
        }
        else {
          console.log("email not found");

          this.ShowEmailError = true;

        }

        this.VerifyInput();

      });

  }

  VerifyInput(): void {
    if (this.ValidUserName && this.ValidEmail) {
      this.CanResetPassword = true;
    }
    else {
      this.CanResetPassword = false;
    }
  }



}
