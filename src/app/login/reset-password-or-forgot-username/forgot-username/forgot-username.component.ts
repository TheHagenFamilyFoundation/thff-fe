import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.css']
})
export class ForgotUsernameComponent implements OnInit {

  title = "Forgot Username"

  email: any;

  constructor() { }

  ngOnInit() {
  }

  retrieveUsername(): void {

    console.log("You clicked on the Retrieve Username")

  }


}
