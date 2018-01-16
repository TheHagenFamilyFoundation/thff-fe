import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.css']
})
export class ForgotUsernameComponent implements OnInit {

  title = "Forgot Username"

  email: any;

  constructor(private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  retrieveUsername(): void {

    console.log("You clicked on the Retrieve Username")

    let snackBarRef = this.snackBar.open('Email has been sent', 'OK', {
      duration: 3000
    });
    this.router.navigate(['/login']);

  }


}
