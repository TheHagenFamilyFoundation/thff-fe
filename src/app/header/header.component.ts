import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

import { GetUserService } from '../services/user/get-user.service'; //used for getting organizations
import { InOrgService } from "../services/user/in-org.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  userName: string;

  organizations: any;

  InOrganization: boolean;

  inOrgCheck: boolean;

  constructor(public authService: AuthService, private getUserService: GetUserService, private inOrg: InOrgService) {

    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      //console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      console.log(this.currentUser.username);
      this.userName = this.currentUser.username;

      this.getOrganizations();

    }

  }

  ngOnInit() {

    console.log("ngOnInit")

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



    if (this.authService.authenticated) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      //console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      console.log(this.currentUser.username);
      this.userName = this.currentUser.username;

      this.getOrganizations();

    }

  }

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

  hello() {

    console.log('clicked on hello');

  }

}
