import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title = "Reset Password"

  username;

  constructor() { }

  ngOnInit() {
  }

  resetPassword(): void {

    console.log("You clicked on the Reset Password")

  }

}
