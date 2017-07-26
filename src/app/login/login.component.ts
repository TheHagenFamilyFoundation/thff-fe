import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login"

  constructor() { }

  ngOnInit() {
  }

  login(): void {
    console.log("You clicked on the Login")
  }

  register(): void {
    console.log("You clicked on the Register")
  }

}
