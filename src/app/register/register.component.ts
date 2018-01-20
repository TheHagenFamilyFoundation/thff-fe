import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { AuthService } from '../auth/auth.service';
import { ValidEmailService } from '../services/valid-email.service';
import { ValidUserNameService } from '../services/valid-username.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [HttpClient]
})
export class RegisterComponent implements OnInit {

  title = "Register";


  API_URL = environment.API_URL;
  //API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  //API_URL = 'http://localhost:1337';

  body;

  userName;
  email;
  password;
  confirmPassword;

  data;
  results: any;

  NoMatchPassword = true;
  ShowConfirmPassword = false;

  ValidUserName: any;
  ValidEmail: any;

  ValidPassword = false;

  ShowUserNameError = false;
  ShowEmailError = false;
  ShowPasswordError = false;

  CanRegister = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
    private validEmailService: ValidEmailService,
    private validUserNameService: ValidUserNameService,
  ) { }

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

    this.ValidUserName = this.validUserNameService.checkValidUserName(this.userName)
      .subscribe(
      (data) => {
        //debug
        console.log(data);
        console.log("data");

        if (data.userfound) {
          console.log("user found");

          this.ShowUserNameError = true;
        }
        else {
          console.log("user not found");

          this.ShowUserNameError = false;

        }

        this.VerifyInput();

      });

  }

  ValidEmailCheck(): void {

    this.ValidEmail = this.validEmailService.checkValidEmail(this.email)
      .subscribe(
      (data) => {
        //debug
        console.log(data);
        console.log("data");

        if (data.emailfound) {
          console.log("email found");

          this.ShowEmailError = true;
        }
        else {
          console.log("email not found");

          this.ShowEmailError = false;

        }

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
