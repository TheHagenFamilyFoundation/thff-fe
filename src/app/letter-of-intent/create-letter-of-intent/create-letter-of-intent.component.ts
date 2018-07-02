import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { environment } from '../../../environments/environment';

//Services
import { CreateLoiService } from '../../services/loi/create-loi.service';
import { GetUserService } from '../../services/user/get-user.service'; //used for getting organizations

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-letter-of-intent',
  templateUrl: './create-letter-of-intent.component.html',
  styleUrls: ['./create-letter-of-intent.component.css']
})

export class CreateLetterOfIntentComponent implements OnInit {

  API_URL = environment.API_URL;

  loiName$ = new Subject<string>();
  description$ = new Subject<string>();

  loiName: any; //string
  description: any; //string

  message: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string

  org: any;
  orgName: any;
  orgSelected: any;

  ShowMessage = false;

  CanCreateLOI = false;

  ValidLOIName = false;
  ValidOrgName = false;

  CreateShort = false;

  organizations = [];

  constructor(
    private http: HttpClient,
    private createLoiService: CreateLoiService,
    private getUserService: GetUserService,
    public dialogRef: MatDialogRef<CreateLetterOfIntentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log('data', data)

    if (data.orgName) {
      this.orgName = data.orgName;
    }

    if (data.orgName) {
      this.org = data.orgId;
    }

    console.log('this.org', this.org)

    this.loiName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.loiName = term;
        this.loiNameChange()
      });

    this.description$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.description = term;
        this.descriptionChange()
      });

  }

  ngOnInit() {

    this.getUserName();

    this.getOrganizations();

  }

  createLOI() {

    var body = {
      name: this.loiName,
      description: this.description,
      username: this.userName,
      userid: this.userId,//userid of user who created the loi
      //need to add org
      org: this.org
    }

    this.dialogRef.close(body);

    console.log('body', body)

    //call the service
    this.createLoiService.createLOI(body)
      .subscribe(
        () => { 'loi Created' },
        err => console.log(err)
      );

  }//end of createOrg

  cancel() {

    console.log('cancel pressed');

  }

  loiNameChange() {

    console.log('loi name change');

    if (this.loiName != "") {

      this.ValidLOIName = true;
    }
    else {
      this.ValidLOIName = false;
    }

    this.verifyInput();

  }

  //description is not required
  descriptionChange() {

    console.log('description change')

  }

  orgChanged(newObj) {
    console.log('org change', newObj)

    //if the first one is selected from default
    //user has selected something
    //cannot select the default
    this.ValidOrgName = true; //always true after first select

    this.org = newObj;

    this.verifyInput();

  }

  getUserName() {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userName = this.user.username
      this.userId = this.user.id;
    }

  }//end of getUserName

  getOrganizations() {

    console.log('get organizations');

    this.getUserService.getUserbyUsername(this.userName)
      .subscribe(
        (user) => {

          console.log('user', user);

          this.organizations = user[0].organizations;

        })
  }//end of checkOrganization

  verifyInput() {

    if (this.ValidLOIName && this.ValidOrgName) {
      this.CanCreateLOI = true;
    }
    else {
      this.CanCreateLOI = false;
    }

  }

  createLOIFull() {

    //route to the full LOI

  }

  createLOIShort() {

    this.CreateShort = true;

  }

}