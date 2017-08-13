import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login"

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    console.log("You clicked on the Login")
  }

  register(): void {
    console.log("You clicked on the Register")
    this.router.navigate(['/register']);
  }

}
