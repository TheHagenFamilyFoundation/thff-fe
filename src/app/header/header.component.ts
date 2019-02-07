import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../auth/auth.service';
import { DirectorService } from "../services/user/director.service";

import { GetUserService } from '../services/user/get-user.service'; //used for getting organizations
import { InOrgService } from "../services/user/in-org.service";

import { CreateOrganizationHeaderComponent } from '../organization/create-organization-header/create-organization-header.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  userName: string;
  accessLevel: number;

  organizations: any;

  InOrganization: boolean;

  inOrgCheck: boolean;

  IsDirector: boolean;

  constructor(
    public authService: AuthService,
    public directorService: DirectorService,
    private getUserService: GetUserService,
    private inOrg: InOrgService,
    private router: Router,
    public dialog: MatDialog,
  ) {

    if (!this.authService.isExpired()) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));

      if (localStorage.getItem('currentUser')) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        console.log(this.currentUser.username);
        this.userName = this.currentUser.username;
        this.accessLevel = this.currentUser.accessLevel;

        if (this.accessLevel > 1) {
          this.IsDirector = true;

          // this.directorService.changeMessage(this.IsDirector)

        }
        else {
          this.IsDirector = false;

          // this.directorService.changeMessage(this.IsDirector)

        }

        this.getOrganizations();

      }

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

    // this.directorService.currentIsDirector.subscribe(message => {

    //   this.IsDirector = message;

    //   // console.log('isdirector change', this.accessLevel)

    //   // if (this.accessLevel > 1) {

    //   //   console.log('isDirector')

    //   //   this.IsDirector = true;
    //   // }
    //   // else {
    //   //   this.IsDirector = false;
    //   // }



    // })

    console.log('expired', this.authService.isExpired())

    if (!this.authService.isExpired()) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));

      if (localStorage.getItem('currentUser')) {

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        console.log(this.currentUser.username);
        this.userName = this.currentUser.username;
        this.accessLevel = this.currentUser.accessLevel;

        console.log('this.accessLevel', this.accessLevel)

        if (this.accessLevel > 1) {
          this.IsDirector = true;

          // this.directorService.changeMessage(this.IsDirector)

        }
        else {
          this.IsDirector = false;

          // this.directorService.changeMessage(this.IsDirector)

        }

        this.getOrganizations();

      }

    }


    console.log('end of ngoninit')

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

  // createOrg() {

  //   console.log('clicked on createOrg');

  //   this.openCreateOrgDialog();

  // }

  createOrg() {

    console.log('create organization');
    this.router.navigate(['/create-organization']);

    //modal
    // this.openCreateOrgDialog();

  }

  openCreateOrgDialog(): void {
    let dialogRef = this.dialog.open(CreateOrganizationHeaderComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //console.log('result', result); //debug

    });
  }

  viewOrgs() {

    console.log('clicked on view Orgs');

    this.router.navigate(['/view-organizations']);

  }

}
