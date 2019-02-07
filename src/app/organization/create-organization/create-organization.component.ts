import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { environment } from '../../../environments/environment';

//Services
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../../services/user/email.service';

import { CreateOrganizationService } from '../../services/organization/create-organization.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  API_URL: string;

  orgName$ = new Subject<string>();
  description$ = new Subject<string>();

  orgName: any; //string
  description: any; //string

  message: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string
  email: string;

  ShowMessage = false;

  CanCreateOrg = false;

  constructor(
    private http: HttpClient,
    private createOrganizationService: CreateOrganizationService,
    public dialogRef: MatDialogRef<CreateOrganizationComponent>,
    private authService: AuthService,
    private emailService: EmailService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.orgName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.orgName = term;
        this.orgNameChange()
      });

    this.description$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.description = term;
        this.descriptionChange()
      });

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

  }

  ngOnInit() {

    this.getUserName();

  }

  createOrg() {

    var body = {
      name: this.orgName,
      description: this.description,
      username: this.userName,
      userid: this.userId,//userid of user who created the organization
    }

    this.dialogRef.close(body);

    //call the service
    this.createOrganizationService.createOrganization(body)
      .subscribe(data => {

        console.log('data', data)

        this.emailService.sendRegisterOrganizationEmail({
          //from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
          to: this.email,
          name: this.userName,
          orgName: data.result.organizationID
        })
          .subscribe(
            (data) => {

            },
            err => console.log(err)
          );


      },
        err => console.log(err)
      );

  }//end of createOrg

  cancel() {

    console.log('cancel pressed');

  }

  orgNameChange() {

    console.log('organization name change');

    if (this.orgName != "") {

      this.CanCreateOrg = true;
    }

  }

  //description is not required
  descriptionChange() {

    console.log('description change')

  }

  getUserName() {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userName = this.user.username
      this.userId = this.user.id;
      this.email = this.user.email;
    }

  }//end of getUserName

}