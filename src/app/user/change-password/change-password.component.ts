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

  curP: any;
  newP: any;
  conP: any;

  @Input()
  user: any;

  ShowConfirmPassword = false;

  ShowMessage = false;
  message: any;

  results: any;

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
        this.message = '';
        this.currentPassword = term;
        this.currentPasswordChange()
      });

    this.newPassword$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.message = '';
        this.newPassword = term;
        this.newPasswordChange()
      });

    this.confirmPassword$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.message = '';
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
        (response) => {

          this.results = response;

          console.log('response', response);

          if (this.results.change) {
            console.log('success')

            //output success message
            this.message = this.results.message;
            this.ShowMessage = true;

            //only reset on successful change
            this.resetComponent();

          }
          else {
            console.log('fail')

            //output fail message
            this.message = 'Password Change was unsuccessful. Try Again.';
            this.ShowMessage = true;

          }

        });

  }

  currentPasswordChange(): void {

    console.log("currentPasswordChange");

    this.currentCompareNewCurrentPasswords();

  }

  newPasswordChange(): void {

    console.log("newPasswordChange");

    this.newCompareNewCurrentConfirmPasswords();

  }

  confirmPasswordChange(): void {

    console.log("confirmPasswordChange");

    this.confirmCompareNewConfirmPasswords();

  }

  currentCompareNewCurrentPasswords(): void {

    console.log('currentCompareNewCurrentPasswords');

    if (this.currentPassword && this.newPassword) {

      if (this.currentPassword != this.newPassword) {
        this.ValidCurrentPassword = true;
        this.newCompareNewCurrentConfirmPasswords();

      }
      else {
        this.ValidCurrentPassword = false;
        this.newCompareNewCurrentConfirmPasswords();

      }

    }
    else {
      this.ValidCurrentPassword = false;
    }

    this.verifyInput();
  }

  newCompareNewCurrentConfirmPasswords(): void {

    console.log('newCompareNewCurrentConfirmPasswords');

    //compare current and new
    if (this.newPassword && this.currentPassword) {

      if (this.currentPassword != this.newPassword) {
        this.ValidNewPassword = true;
        this.ValidCurrentPassword = true;

        this.ShowConfirmPassword = true;

        this.message = '';
        this.ShowMessage = false;

      }
      else {

        console.log('new and current are the same');


        this.ValidNewPassword = false;
        this.ValidCurrentPassword = false;

        this.ShowConfirmPassword = false;

        this.message = 'New Password must be different from Current Password';
        this.ShowMessage = true;

      }

    }
    else {
      this.ValidNewPassword = false;
    }

    console.log('this.message', this.message);


    //compare new and confirm
    if (this.newPassword && this.confirmPassword && this.ShowConfirmPassword) {

      if (this.newPassword == this.confirmPassword) {
        this.ValidConfirmPassword = true;
        this.ValidNewPassword = true;

        this.message = '';
        this.ShowMessage = false;

      }
      else {
        this.ValidConfirmPassword = false;
        this.ValidNewPassword = false;

        this.message = 'Confirm Password does not match New Password';
        this.ShowMessage = true;

      }
    }
    else {
      this.ValidNewPassword = false;
    }

    this.verifyInput();
  }

  confirmCompareNewConfirmPasswords(): void {

    console.log('confirmCompareNewConfirmPasswords');

    if (this.confirmPassword && this.newPassword) {
      if (this.newPassword == this.confirmPassword) {
        this.ValidConfirmPassword = true;
        this.ValidNewPassword = true;

        this.message = '';
        this.ShowMessage = false;

      }
      else {
        this.ValidConfirmPassword = false;
        this.ValidNewPassword = false;

        this.message = 'Confirm Password does not match New Password';
        this.ShowMessage = true;

      }
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

      this.message = '';//clear message
    }
    else {
      this.CanChangePassword = false;
    }
  }//end of verifyInput

  resetComponent(): void {

    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';

    this.curP = '';
    this.newP = '';
    this.conP = '';

    this.ValidCurrentPassword = false;
    this.ValidNewPassword = false;
    this.ValidConfirmPassword = false;

    this.ShowConfirmPassword = false;

    this.CanChangePassword = false;

  }

}
