import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Login"

  //API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  API_URL = 'http://localhost:1337';

  userName;
  password;

  body;

  data;
  results: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  login(): void {
    console.log("You clicked on the Login")

    console.log("userName = " + this.userName);
    console.log("password = " + this.password);

    let urlString = this.API_URL + '/auth';

    this.body = {
      username: this.userName,
      password: this.password
    }

    console.log(this.body);
    console.log(urlString);

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

        console.log(this.results.user)

        localStorage.setItem('token', this.results.token);
        localStorage.setItem('currentUser', JSON.stringify(this.results.user));

        console.log("token = " + localStorage.getItem('token'));
        console.log("currentUser = " + localStorage.getItem('currentUser'));

      });

    //this.router.navigate(['/login']);
    this.router.navigate(['/home']);

  }

  register(): void {
    console.log("You clicked on the Register")
    this.router.navigate(['/register']);
  }

}
