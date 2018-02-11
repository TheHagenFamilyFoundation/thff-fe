import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidUserNameService } from '../../../../services/valid-username.service';
import { ValidResetCodeService } from '../../../../services/valid-resetcode.service';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private validUserNameService: ValidUserNameService,
    private validResetCodeService: ValidResetCodeService
  ) { }

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

  }

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

  }

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
  }

  newPasswordChange(event) {
    console.log("newPasswordChange");

    console.log(event);
  }

  confirmPasswordChange(event) {
    console.log("confirmPasswordChange");

    console.log(event);
  }

  setNewPassword(): void {

    console.log("set New Password");
    

  }


}
