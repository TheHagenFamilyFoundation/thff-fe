import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Register"

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(): void {
    console.log("You clicked on the Register")

    this.router.navigate(['/login']);
  }

}
