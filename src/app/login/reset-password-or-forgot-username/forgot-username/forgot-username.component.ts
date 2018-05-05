import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { ValidEmailService } from '../../../services/user/valid-email.service';
import { GetUserService } from '../../../services/user/get-user.service';
import { EmailService } from '../../../services/user/email.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.css']
})
export class ForgotUsernameComponent implements OnInit {

  title = "Forgot Username"

  email$ = new Subject<string>();

  email: any;
  userName: any;

  message: any;

  ValidEmail: any;

  ShowEmailError = false;
  CanRetrieveUserName = false;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private validEmailService: ValidEmailService,
    public getUserService: GetUserService,
    public emailService: EmailService) {

    this.email$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.email = term;
        this.emailChange()
      });

  }

  ngOnInit() {
  }

  retrieveUsername(): void {

    console.log("You clicked on the Retrieve Username")

    this.getUserService.getUserbyEmail(this.email)
      .subscribe(
        (user) => {
          console.log(user)
          console.log(user[0].username)
          this.userName = user[0].username;

          this.emailService.sendUserNameEmail({
            from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
            to: this.email,
            name: this.userName
          })
            .subscribe(
              () => {
                let snackBarRef = this.snackBar.open('Email has been sent', 'OK', {
                  duration: 3000
                });
              },
              err => console.log(err)
            );

          this.router.navigate(['/login']);
        })
  }//end of retrieveUsername

  emailChange() {
    console.log("emailChange");

    if (this.email != "") {
      //this.ValidEmail = true;
      this.ValidEmailCheck();
    }
    else {
      this.CanRetrieveUserName = false;
    }

  }//end of EmailChange

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
            this.CanRetrieveUserName = true;
          }
          else {
            console.log("email not found");

            this.ShowEmailError = true;

          }

        });

  }//end of ValidEmailCheck

}
