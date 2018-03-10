import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidUserNameService } from '../../../../services/valid-username.service';
import { ValidResetCodeService } from '../../../../services/valid-resetcode.service';
import { SetNewPasswordService } from '../../../../services/set-new-password.service';
//import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-type-new-password',
  templateUrl: './type-new-password.component.html',
  styleUrls: ['./type-new-password.component.css']
})
export class TypeNewPasswordComponent implements OnInit {

  title = "Type New Password"

  user: any;
  userName: any;

  currentPassword: any;
  newPassword: any;
  confirmPassword: any;

  resetCode: any;
  private sub: any;

  ValidUserName: any;
  ValidResetCode: any;
  //ValidResetTime: any;

  ValidPassword: any;

  ValidCurrentPassword: any;
  ValidNewPassword: any;
  ValidConfirmPassword: any;

  ValidPasswordReset: any;

  NoMatchPassword = true;

  CanSetNewPassword = false; //initialize to false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private validUserNameService: ValidUserNameService,
    private validResetCodeService: ValidResetCodeService,
    private setNewPasswordService: SetNewPasswordService
  ) {

    this.newPassword = "";
    this.confirmPassword = "";

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

  //also checks the time
  checkResetCode(): void {

    console.log("checkResetCode");

    this.ValidResetCode = this.validResetCodeService.checkValidResetCode(this.resetCode)
      .subscribe(
        (data) => {
          //debug
          console.log(data);
          console.log("data");

          if (data.validresetCode) {
            console.log("reset code found");
            //this.checkResetTime();
          }
          else {
            console.log("reset code not found");
            this.router.navigate(['home']);
          }

        });

  }//end of checkResetCode

  currentPasswordChange(event) {
    console.log("currentPasswordChange");

    console.log(event);

    this.ValidCurrentPassword = true;

    this.comparePasswords();
    //this.compareNewCurrentPasswords();

  }//end of new PasswordChange

  newPasswordChange(event) {
    console.log("newPasswordChange");

    console.log(event);

    this.ValidNewPassword = true;

    this.comparePasswords();
    //this.compareNewCurrentPasswords();

  }//end of new PasswordChange

  confirmPasswordChange(event) {
    console.log("confirmPasswordChange");

    this.comparePasswords();
  }//end of confirmPasswordChange

  // compareNewCurrentPasswords(): void {

  //   console.log("compareNewOldPasswords");


  //     if (this.currentPassword != this.newPassword) {
  //       this.ShowConfirmPassword = true;
  //       this.ValidNewPassword = true;
  //       this.ValidCurrentPassword = true;
  //       this.NoMatchNewCurrentPassword = false;
  //     }
  //     else {
  //       this.ShowConfirmPassword = false;
  //       this.confirmPassword = "";
  //       this.ValidNewPassword = false;
  //       this.ValidCurrentPassword = false;
  //       this.NoMatchNewCurrentPassword = true;
  //     }

  //   }

  //   this.verifyInput();

  // }//end of compareNewCurrentPasswords

  comparePasswords(): void {

    console.log("comparePasswords");

    if (this.newPassword != this.confirmPassword) {
      this.NoMatchPassword = false;
      //debug
      console.log("NoMatchPassword = " + this.NoMatchPassword);

      this.ValidConfirmPassword = false;

      this.verifyInput();
    }
    else {

      //if the passwords match
      this.NoMatchPassword = true;
      //debug
      console.log("NoMatchPassword = " + this.NoMatchPassword);

      this.ValidConfirmPassword = true;

      this.verifyInput();
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
      cp: this.currentPassword,
      np: this.newPassword,
      conp: this.confirmPassword,
      un: this.userName
    }

    var reset = false;

    this.ValidPasswordReset = this.setNewPasswordService.setNewPassword(data)
      .subscribe(
        (data) => {
          console.log("new password set");
          console.log(data);
          reset = data.reset;
          
          if(reset)
          {
            this.router.navigate(['/login']);
          }
          else{
            //error message
          }
        })

  }//end of setNewPassword

}
