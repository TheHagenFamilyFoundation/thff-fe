import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;

  title = "Home"

  constructor() {
    console.log("currentUser");
    console.log(localStorage.getItem('currentUser'));
    console.log(localStorage.getItem('currentUser.username'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
