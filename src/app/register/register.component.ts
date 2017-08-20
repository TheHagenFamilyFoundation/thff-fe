import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'


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

  CanRegister = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  register(): void {
    console.log("You clicked on the Register")

    let urlString = this.API_URL + '/user';

    console.log("userName = " + this.userName);
    console.log("email = " + this.email);
    console.log("password = " + this.password);
    console.log("confirmPassword = " + this.confirmPassword);

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

        //console.log(this.results.token)

        localStorage.setItem('token', this.results.token);

        console.log("token = " + localStorage.getItem('token'));

      });

    //this.router.navigate(['/login']);
    this.router.navigate(['/home']);

  }//end of register function

  UsernameChange(event) {
    console.log("UsernameChange");

    console.log(event);

    let validUser = false;

    if (this.userName != "") {

      this.ValidUser();

      // validUser = this.ValidUser();

      // console.log("1validUser = " + validUser)

      // //if user is found then its not a valid user name
      // if (validUser) {
      //   this.ValidUserName = false;
      // }
      // else {
      //   this.ValidUserName = true;
      // }

      //console.log("this.ValidUserName = " + this.ValidUserName);
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
      this.ValidEmail = true;
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

  ValidUser(): void {

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
        }
        else {
          isValidUser = true;
          this.ValidUserName = true;
        }

        console.log("isValidUser = " + isValidUser)
        console.log("ValidUserName = " + this.ValidUserName)
        this.VerifyInput();
      });

    //return isValidUser;

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
