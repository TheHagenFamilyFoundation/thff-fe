import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

//services
import { ValidUserNameService } from '../../../../services/user/valid-username.service';
import { ValidResetCodeService } from '../../../../services/user/valid-resetcode.service';
import { SetNewPasswordService } from '../../../../services/user/set-new-password.service';
import { GetUserService } from '../../../../services/user/get-user.service';
import { EmailService } from '../../../../services/user/email.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-type-new-password',
  templateUrl: './type-new-password.component.html',
  styleUrls: ['./type-new-password.component.css']
})
export class TypeNewPasswordComponent implements OnInit {

  title = "Type New Password"

  user: any;
  userName: any;
  email: any;

  message: any;

  newPassword$ = new Subject<string>();
  confirmPassword$ = new Subject<string>();

  newPassword: any;
  confirmPassword: any;

  resetCode: any;
  private sub: any;

  ValidUserName: any;
  ValidResetCode: any;

  ValidPassword: any;

  ValidNewPassword: any;
  ValidConfirmPassword: any;

  ValidPasswordReset: any;

  NoMatchPassword = true;
  NoMatchNewCurrentPassword = true;

  CanSetNewPassword = false; //initialize to false

  ShowCurrentNewError = false;
  ShowNewConfirmError = false;
  ShowConfirmPassword = false;
  ShowMessage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    private validUserNameService: ValidUserNameService,
    private validResetCodeService: ValidResetCodeService,
    private setNewPasswordService: SetNewPasswordService,
    private getUserService: GetUserService,
    private emailService: EmailService
  ) {

    this.newPassword = "";
    this.confirmPassword = "";

    this.newPassword$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.newPassword = term;
        this.newPasswordChange()
      });

    this.confirmPassword$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.confirmPassword = term;
        this.confirmPasswordChange()
      });

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.resetCode = params['resetCode']; // (+) converts string 'id' to a number
      this.userName = params['username'];

      console.log("this.resetCode")
      console.log(this.resetCode)

      console.log("this.userName")
      console.log(this.userName)

      this.checkUserName();
    });

  }//end of ngOnInit

  checkUserName(): void {

    console.log("checkUserName");

    this.ValidUserName = this.validUserNameService.checkValidUserName(this.userName)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.userfound) {
            console.log("user found");
            this.checkResetCode();
          }
          else {
            console.log("user not found");
            this.router.navigate(['home']);
          }

        });

  }//end of checkUserName

  //also checks the time and the resetPassword field if true or false
  //false implying that the user already reset the password
  checkResetCode(): void {

    console.log("checkResetCode");

    this.ValidResetCode = this.validResetCodeService.checkValidResetCode(this.resetCode)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          var message = data.message;

          if (data.validresetCode) {
            console.log("reset code found");
            console.log(message);
            //this.checkResetTime();
          }
          else {
            console.log("reset code not found");
            console.log(message);
            //show a toast before redirect

            let snackBarRef = this.snackBar.open(message, 'OK', {
              duration: 3000
            });

            this.router.navigate(['home']);
          }

        });

  }//end of checkResetCode

  newPasswordChange() {
    console.log("newPasswordChange");

    this.message = "";

    if (this.newPassword != "") {
      this.ValidNewPassword = true;
      this.ShowConfirmPassword = true;
    }
    else {
      this.ValidNewPassword = false;
      this.ShowConfirmPassword = false;
    }

    this.comparePasswords();

  }//end of new PasswordChange

  confirmPasswordChange() {
    console.log("confirmPasswordChange");

    this.message = "";

    this.comparePasswords();
  }//end of confirmPasswordChange

  comparePasswords(): void {

    console.log("comparePasswords");

    if (this.confirmPassword != "") {
      if (this.newPassword != this.confirmPassword) {
        this.NoMatchPassword = false;
        //debug
        console.log("NoMatchPassword = " + this.NoMatchPassword);

        this.ValidConfirmPassword = false;
        this.ShowNewConfirmError = true;

        this.verifyInput();
      }
      else {

        //if the passwords match
        this.NoMatchPassword = true;
        //debug
        console.log("NoMatchPassword = " + this.NoMatchPassword);

        this.ValidConfirmPassword = true;
        this.ShowNewConfirmError = false;

        this.verifyInput();
      }
    }

  }//end of ComparePasswords

  verifyInput(): void {
    console.log("verifyInput");

    if (this.ValidNewPassword && this.ValidConfirmPassword) {
      this.CanSetNewPassword = true;
    }
    else {
      this.CanSetNewPassword = false;
    }

  }//end of verifyInput()

  setNewPassword(): void {

    console.log("set New Password");

    var data = {
      np: this.newPassword,
      conp: this.confirmPassword,
      un: this.userName
    }

    var reset = false;

    this.ValidPasswordReset = this.setNewPasswordService.setNewPassword(data)
      .subscribe(
        (data) => {
          console.log("new password set");
          console.log("data");
          console.log(data);

          reset = data.reset;
          var message = data.message;

          if (message) {
            console.log("message: " + message);
            this.ShowMessage = true;

            this.message = message;
          }

          if (reset) {

            let snackBarRef = this.snackBar.open(message, 'OK', {
              duration: 3000
            });

            this.getUserService.getUserbyUsername(this.userName)
              .subscribe(
                (user) => {
                  console.log(user)
                  console.log(user[0].email)
                  this.email = user[0].email;

                  this.emailService.sendResetPasswordConfirmationEmail({
                    from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
                    to: this.email,
                    name: this.userName,
                    text: message,
                  })
                    .subscribe(
                      () => { },
                      err => console.log(err)
                    );

                },
                err => console.log(err)
              )

            this.router.navigate(['/login']);
          }
          else {
            //error message

            console.log("Error: " + reset);
            this.CanSetNewPassword = false;
          }
        })

  }//end of setNewPassword

}
