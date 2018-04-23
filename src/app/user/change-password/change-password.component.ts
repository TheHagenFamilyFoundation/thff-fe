import { Component, OnInit, Input } from '@angular/core';

import { ChangePasswordService } from '../../services/user/change-password.service';

//debounce
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  currentPassword$ = new Subject<string>();
  newPassword$ = new Subject<string>();
  confirmPassword$ = new Subject<string>();

  currentPassword: any;
  newPassword: any;
  confirmPassword: any;

  @Input()
  user: any;

  ShowConfirmPassword = false;

  ShowMessage = false;
  message: any;

  ValidCurrentPassword = false;
  ValidNewPassword = false;
  ValidConfirmPassword = false;

  ValidChangePassword: any;

  CanChangePassword = false;

  constructor(private changePasswordService: ChangePasswordService) {

    //debounce
    this.currentPassword$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.currentPassword = term;
        this.currentPasswordChange()
      });

    this.newPassword$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.newPassword = term;
        this.newPasswordChange()
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

    console.log('this.user');
    console.log(this.user);

  }

  changePassword(): void {
    console.log("change password pressed");

    var data = {
      username: this.user.username,
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    }

    this.ValidChangePassword = this.changePasswordService.changePassword(data)
      .subscribe(
        (data) => {
          console.log("new password set");
          console.log("data");
          console.log(data);
        });

  }

  currentPasswordChange(): void {

    console.log("currentPasswordChange");

    if (this.currentPassword != "") {
      this.ValidCurrentPassword = true;
    }
    else {
      this.ValidCurrentPassword = false;
    }

    this.compareNewCurrentPasswords();

  }

  newPasswordChange(): void {

    console.log("newPasswordChange");

    if (this.newPassword != "") {
      this.ValidNewPassword = true;

    }
    else {
      this.ValidNewPassword = false;
    }

    this.compareNewCurrentPasswords();

  }

  confirmPasswordChange(): void {

    console.log("confirmPasswordChange");

    this.compareNewConfirmPasswords();

  }

  compareNewCurrentPasswords(): void {

    if (this.ValidCurrentPassword && this.ValidNewPassword) {
      if (this.currentPassword != this.newPassword) {
        this.ShowConfirmPassword = true;
      }
      else {
        this.ShowConfirmPassword = false;
      }
    }
    this.verifyInput();
  }

  compareNewConfirmPasswords(): void {

    if (this.newPassword == this.confirmPassword) {
      this.ValidConfirmPassword = true;
    }
    else {
      this.ValidConfirmPassword = false;
    }
    this.verifyInput();
  }//end of compareNewConfirmPasswords

  verifyInput(): void {

    console.log("verifyInput");

    if (this.ValidCurrentPassword && this.ValidNewPassword && this.ValidConfirmPassword) {
      this.CanChangePassword = true;
    }
    else {
      this.CanChangePassword = false;
    }
  }//end of verifyInput


}
