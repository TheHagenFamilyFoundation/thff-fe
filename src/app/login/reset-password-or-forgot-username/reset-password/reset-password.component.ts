import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title = "Reset Password"

  username: any;
  email: any;

  constructor(private router: Router, public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  resetPassword(): void {

    console.log("You clicked on the Reset Password")

    let snackBarRef = this.snackBar.open('Password has been reset. Please check your email.', 'OK', {
      duration: 3000
    });

    //check if username and email are valid then sends email
    this.checkValidUserNameEmail();

    this.router.navigate(['/login']);

  }

  checkValidUserNameEmail(): void {

    console.log("Checking if Username and Email are valid");


  }



}
