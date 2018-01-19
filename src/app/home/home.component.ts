import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;

  title = "Home"

  fullImagePath = '/assets/images/thfflogo1.JPG';
  fullImagePath2 = '/assets/images/cv_busses1.JPG';

  env: any;

  /* Constructor */
  constructor(public authService: AuthService) {

    console.log("Home Constructor")

    this.env = environment.envName;



    console.log(this.authService.authenticated)

    if (this.authService.authenticated) {

      console.log("authService authenticated")

      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

  }//end of constructor

  /* ngOnInit */

  ngOnInit() {

    console.log("ngOnInit")

    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      //console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      console.log(this.currentUser.username);


    }
  }//end of ngOnInit

}
