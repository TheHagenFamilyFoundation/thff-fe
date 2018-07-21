import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';

import { GetUserService } from '../services/user/get-user.service'; //used for getting organizations
import { InOrgService } from "../services/user/in-org.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;

  userName: string;
  accessLevel: number; //debug

  organizations: any;

  title = "Home"

  fullImagePath = '/assets/images/thfflogo1.JPG';
  fullImagePath2 = '/assets/images/cv_busses1.JPG';

  env: any;
  API: any;

  InOrganization: boolean;

  inOrgCheck: boolean;

  IsDirector: boolean;

  /* Constructor */
  constructor(public authService: AuthService, private inOrg: InOrgService, private getUserService: GetUserService) {

    console.log("Home Constructor")

    this.inOrg.currentInOrg.subscribe(message => {

      this.inOrgCheck = message;

      console.log('inOrgCheck change', this.inOrgCheck)
      if (this.inOrgCheck) {
        console.log('in org')
        this.InOrganization = true;

      }
      else {
        this.InOrganization = false;
      }

    })

    this.env = environment.envName;
    this.API = environment.API_URL;

    console.log(this.authService.authenticated)

    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      //console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      console.log(this.currentUser.username);
      this.userName = this.currentUser.username;
      this.accessLevel = this.currentUser.accessLevel;

      if (this.accessLevel > 1) {
        this.IsDirector = true;
      }
      else {
        this.IsDirector = false;
      }

      this.getOrganizations();

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
      this.userName = this.currentUser.username;

      this.getOrganizations();

    }

  }//end of ngOnInit

  //check if user is in an organization
  getOrganizations() {

    console.log('get organizations');

    this.getUserService.getUserbyUsername(this.userName)
      .subscribe(
        (user) => {

          console.log('user', user);

          if (user.length > 0) {

            if (user[0].organizations.length > 0) {

              this.organizations = user[0].organizations;

              console.log('this.organizations', this.organizations)

              this.InOrganization = true;

              this.inOrg.changeMessage(true)

            }
            else {
              console.log('not in any organizations')

              this.InOrganization = false;

              this.inOrg.changeMessage(false)

            }

          }
          else {

            console.log('no user')

          }

        })

  }//end of getOrganizations


}
