import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;

  title = "Home"

  constructor(private authService: AuthService) {
    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  }

  ngOnInit() {

    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
