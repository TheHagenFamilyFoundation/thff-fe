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

  /* Constructor */
  constructor(public authService: AuthService) {

    console.log("Home Constructor")

    console.log(this.authService.authenticated)

    if (this.authService.authenticated) {

      console.log("authService authenticated")

      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  }

  /* ngOnInit */

  ngOnInit() {

    console.log("ngOnInit")

    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }//end of ngOnInit

}
