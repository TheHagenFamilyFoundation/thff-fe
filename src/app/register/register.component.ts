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
  //https://hagenfoundationbackend.herokuapp.com/requests
  //API_URL = 'localhost:1337';

  body;

  userName;
  email;
  password;
  confirmPassword;

  data;
  results: any;

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

    // this.http.get(this.API_URL + '/foo')
    //   .subscribe(data => {
    //     //this.results = data['results'];
    //     console.log(data);
    //     //console.log(this.results);
    //   }
    //   );


    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials": "true",
    //   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT, DELETE",
    //   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    // });
    //headers.append("Access-Control-Allow-Credentials", "true", )
    //headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    //headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    //console.log(headers);


    // this.http.get(this.API_URL + '/requests') //, { headers: headers } 
    //   //)
    //   //.subscribe(data => data, //{
    //   // Read the result field from the JSON response.
    //   //this.results = data['results'];

    //   .subscribe(data => console.log(data)


    //   //  console.log(this.results);


    //   //  }
    //   );


    //send to api

    this.http.post(urlString, this.body)
      .subscribe(data => {
        this.results = data;
        console.log(data);
        console.log("this.results");
        console.log(this.results);
        console.log(this.results.token);

        //console.log(this.results.token)
        localStorage.setItem('token', this.results.token);

        console.log("token = " + localStorage.getItem('token'));

      }
      );


    //this.router.navigate(['/login']);
    this.router.navigate(['/home']);
  }

}
