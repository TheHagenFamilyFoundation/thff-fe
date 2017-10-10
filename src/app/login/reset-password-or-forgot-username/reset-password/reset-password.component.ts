import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  title = "Reset Password"

  username;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  resetPassword(): void {

    console.log("You clicked on the Reset Password")

    this.router.navigate(['/login']);

  }

}
