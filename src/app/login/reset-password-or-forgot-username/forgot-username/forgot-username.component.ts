import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { GetUserService } from '../../../services/user/get-user.service';
import { EmailService } from '../../../services/user/email.service';

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.css']
})
export class ForgotUsernameComponent implements OnInit {

  title = "Forgot Username"

  email: any;
  userName: any;

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    public getUserService: GetUserService,
    public emailService: EmailService) { }

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

}
