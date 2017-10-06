import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  title = "Forgot Password"

  username;

  constructor() { }

  ngOnInit() {
  }

  resetPassword(): void {

    console.log("You clicked on the Reset Password")

  }

}
