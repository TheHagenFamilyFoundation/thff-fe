import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HttpClient]
})
export class RegisterComponent implements OnInit {

  title = "Register";

  //API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  API_URL = 'http://localhost:1337';

  body;

  userName;
  email;
  password;
  confirmPassword;

  data;
  results: any;

  NoMatchPassword = true;
  ShowConfirmPassword = false;

  ValidUserName = false;
  ValidEmail = false;
  ValidPassword = false;

  ShowUserNameError = false;
  ShowEmailError = false;
  ShowPasswordError = false;

  CanRegister = false;

  constructor(private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
  }

  register(): void {
    console.log("You clicked on the Register")

    let urlString = this.API_URL + '/user';

    // console.log("userName = " + this.userName);
    // console.log("email = " + this.email);
    // console.log("password = " + this.password);
    // console.log("confirmPassword = " + this.confirmPassword);

    this.body = {
      username: this.userName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    console.log(this.body);
    console.log(urlString);

    //send to api

    this.http.post(urlString, this.body)
      .subscribe(data => {
        this.results = data;

        /*debug

        console.log(data);
        console.log("this.results");
        console.log(this.results);
        console.log(this.results.token);
        */

        //console.log(this.results)

        localStorage.setItem('token', this.results.token);
        localStorage.setItem('currentUser', JSON.stringify(this.results.user));

        console.log("token = " + localStorage.getItem('token'));
        console.log("currentUser = " + localStorage.getItem('currentUser'));

        this.authService.login();

      });

    //this.router.navigate(['/login']);
    //this.router.navigate(['/home']);

  }//end of register function

  UsernameChange(event) {
    console.log("UsernameChange");

    console.log(event);

    if (this.userName != "") {

      this.ValidUserCheck();

    }
    else {

      this.ValidUserName = false;

    }

    this.VerifyInput();
  }

  EmailChange(event) {
    console.log("EmailChange");

    console.log(event);

    if (this.email != "") {
      //this.ValidEmail = true;
      this.ValidEmailCheck();
    }
    else {
      this.ValidEmail = false;
    }

    this.VerifyInput();
  }

  PasswordChange(event) {
    console.log("PasswordChange");

    console.log(event);

    if (this.password != "") {
      this.ShowConfirmPassword = true;
    }
    else {
      this.ShowConfirmPassword = false;
      this.confirmPassword = "";
      this.ValidPassword = false;
    }

    this.VerifyInput();

  }


  ConfirmPasswordChange(event) {
    console.log("ConfirmPasswordChange");

    console.log(event);

    this.ComparePasswords();
  }

  ComparePasswords(): void {

    if (this.password != this.confirmPassword) {
      this.NoMatchPassword = false;
      //debug
      console.log("NoMatchPassword = " + this.NoMatchPassword);

      this.ValidPassword = false;

      this.VerifyInput();
    }
    else {

      //if the passwords match
      this.NoMatchPassword = true;
      //debug
      console.log("NoMatchPassword = " + this.NoMatchPassword);

      this.ValidPassword = true;

      this.VerifyInput();
    }

  }//end of ComparePasswords

  ValidUserCheck(): void {

    let isValidUser = false;

    let urlString = this.API_URL + "/UserNameExists?username=" + this.userName;

    console.log("urlString = " + urlString);

    this.http.get(urlString)
      .subscribe(data => {
        this.results = data["userfound"];
        console.log("data");
        console.log(data);
        console.log(this.results);

        if (this.results) {
          isValidUser = false;
          this.ValidUserName = false;

          this.ShowUserNameError = true;
        }
        else {
          isValidUser = true;
          this.ValidUserName = true;

          this.ShowUserNameError = false;
        }

        console.log("isValidUser = " + isValidUser)
        console.log("ValidUserName = " + this.ValidUserName)
        this.VerifyInput();
      });

    //return isValidUser;

  }

  ValidEmailCheck(): void {
    let isValidEmail = false;

    let urlString = this.API_URL + "/EmailExists?email=" + this.email;

    console.log("urlString = " + urlString);

    this.http.get(urlString)
      .subscribe(data => {
        this.results = data["emailfound"];
        console.log("data");
        console.log(data);
        console.log(this.results);

        if (this.results) {
          isValidEmail = false;
          this.ValidEmail = false;

          this.ShowEmailError = true;
        }
        else {
          isValidEmail = true;
          this.ValidEmail = true;

          this.ShowEmailError = false;
        }

        console.log("isValidEmail = " + isValidEmail);
        console.log("ValidEmail = " + this.ValidEmail);

        this.VerifyInput();
      });
  }

  VerifyInput(): void {
    if (this.ValidUserName && this.ValidEmail && this.ValidPassword) {
      this.CanRegister = true;
    }
    else {
      this.CanRegister = false;
    }
  }

}
