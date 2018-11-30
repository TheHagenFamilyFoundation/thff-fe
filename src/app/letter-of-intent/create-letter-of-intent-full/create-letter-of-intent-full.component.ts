import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { CreateLoiService } from '../../services/loi/create-loi.service';
import { GetUserService } from '../../services/user/get-user.service'; //used for getting organizations

import { CreateLoiInfoService } from '../../services/loi/loi-info/create-loi-info.service';

@Component({
  selector: 'app-create-letter-of-intent-full',
  templateUrl: './create-letter-of-intent-full.component.html',
  styleUrls: ['./create-letter-of-intent-full.component.css']
})
export class CreateLetterOfIntentFullComponent implements OnInit {

  title = "Create Letter Of Intent Full"

  loiName$ = new Subject<string>();
  description$ = new Subject<string>();

  loiName: any; //string
  description: any; //string

  loiID: any;

  loiInfo: any;

  projectTitle$ = new Subject<string>();
  purpose$ = new Subject<string>();
  projectStartDate$ = new Subject<string>();
  projectEndDate$ = new Subject<string>();
  amountRequested$ = new Subject<string>();
  totalProjectCost$ = new Subject<string>();

  projectTitle: string;
  purpose: string;
  projectStartDate: any;
  projectEndDate: any;
  amountRequested: string;
  totalProjectCost: string;

  message: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string

  org: any;
  orgName: any;
  orgSelected: any;

  startDate: any;
  endDate: any;

  ShowMessage = false;

  ShowCostMessage = false;
  costMessage: any;

  CanCreateLOI = false;

  //loi create
  ValidLOIName = false;
  ValidOrgName = false;

  //loi info
  ValidProjectTitle = false;
  ValidPurpose = false;
  ValidProjectStartDate = false;
  ValidProjectEndDate = false;
  ValidAmountRequested = false;
  ValidTotalProjectCost = false;

  CreateShort = false;

  organizations = [];

  constructor(
    private router: Router,
    private createLoiService: CreateLoiService,
    private getUserService: GetUserService,
    private createLoiInfoService: CreateLoiInfoService
  ) {

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


    this.projectTitle$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.projectTitle = term;
        this.projectTitleChange()
      });

    this.purpose$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.purpose = term;
        this.purposeChange()
      });

    this.projectStartDate$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.projectStartDate = new FormControl(new Date(term).toISOString());

        this.startDate = this.projectStartDate.value;
        // this.startDate = this.getFormattedDate(this.startDate);

        this.projectStartDateChange()
      });

    this.projectEndDate$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.projectEndDate = new FormControl(new Date(term).toISOString());

        this.endDate = this.projectEndDate.value;
        // this.endDate = this.getFormattedDate(this.endDate);

        this.projectEndDateChange()
      });

    // this.amountRequested$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.amountRequested = term;
    //     this.amountRequestedChange()
    //   });

    // this.totalProjectCost$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.totalProjectCost = term;
    //     this.totalProjectCostChange()
    //   });

    this.defaultValues();

  }

  ngOnInit() {

    this.getUserName();

    this.getOrganizations();

  }

  defaultValues() {

    console.log('defaulting values')

    this.projectTitle = ''
    this.purpose = '';

    //Start Date Formatting
    this.projectStartDate = new FormControl(new Date().toISOString())

    console.log('this.projectStartDate', this.projectStartDate.value);

    this.startDate = this.projectStartDate.value;
    this.startDate = this.getFormattedDate(this.startDate);

    //End Date Formatting
    this.projectEndDate = new FormControl(new Date().toISOString())

    console.log('this.projectEndDate', this.projectEndDate.value);

    this.endDate = this.projectEndDate.value;
    this.endDate = this.getFormattedDate(this.endDate);

    console.log('this.endDate', this.endDate)

    this.amountRequested = '';
    this.totalProjectCost = '';

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

    this.verifyInput();

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

    console.log('in verifyInput')

    console.log('this.ValidLOIName', this.ValidLOIName)
    console.log('this.ValidOrgName', this.ValidOrgName)
    console.log('this.ValidProjectTitle', this.ValidProjectTitle)
    console.log('this.ValidPurpose', this.ValidPurpose)
    console.log('this.ValidProjectStartDate', this.ValidProjectStartDate)
    console.log('this.ValidProjectEndDate', this.ValidProjectEndDate)
    console.log('this.ValidAmountRequested', this.ValidAmountRequested)
    console.log('this.ValidTotalProjectCost', this.ValidTotalProjectCost)

    if (this.ValidLOIName && this.ValidOrgName &&
      this.ValidProjectTitle && this.ValidPurpose &&
      this.ValidProjectStartDate && this.ValidProjectEndDate &&
      this.ValidAmountRequested && this.ValidTotalProjectCost) {

      this.CanCreateLOI = true;
    }
    else {
      this.CanCreateLOI = false;
    }

  }

  projectTitleChange() {
    console.log("projectTitleChange");

    this.ShowMessage = false;

    if (this.projectTitle != "") {

      this.ValidProjectTitle = true;
    }
    else {
      this.ValidProjectTitle = false;
    }

    this.verifyInput();

  }

  purposeChange() {
    console.log("purposeChange");

    this.ShowMessage = false;

    if (this.purpose != "") {

      this.ValidPurpose = true;
    }
    else {
      this.ValidPurpose = false;
    }

    this.verifyInput();

  }

  projectStartDateChange() {
    console.log("projectStartDateChange");

    this.ShowMessage = false;

    this.ValidProjectStartDate = true;

    this.verifyInput();

  }

  projectEndDateChange() {
    console.log("projectEndDateChange");

    this.ShowMessage = false;

    this.ValidProjectEndDate = true;

    this.verifyInput();

  }

  amountRequestedChange(event) {
    console.log("amountRequestedChange", event);

    this.ShowMessage = false;

    this.checkCostAmounts();

  }

  totalProjectCostChange(event) {
    console.log("totalProjectCostChange", event);

    this.ShowMessage = false;

    this.checkCostAmounts();

  }

  getFormattedDate(date) {

    var d = new Date(date);

    var year = d.getFullYear();

    var month = (1 + d.getMonth()).toString();
    // month = month.length > 1 ? month : '0' + month;
    month = month.length > 1 ? month : month;

    var day = d.getDate().toString();
    //day = day.length > 1 ? day : '0' + day;
    day = day.length > 1 ? day : day;

    return month + '/' + day + '/' + year;
  }

  createLOI() {

    var loiBody = {
      name: this.loiName,
      description: this.description,
      username: this.userName,
      userid: this.userId,//userid of user who created the loi
      //need to add org
      org: this.org
    }

    console.log('body', loiBody)

    //call the service
    this.createLoiService.createLOI(loiBody)
      .subscribe(
        (result) => {

          console.log('result', result)
          this.loiID = result.result.id;

          console.log('loi Created');

          console.log('now creating LOIInfo')

          let infoBody = {
            projectTitle: this.projectTitle,
            purpose: this.purpose,
            projectStartDate: this.projectStartDate.value,
            projectEndDate: this.projectEndDate.value,
            amountRequested: this.amountRequested,
            totalProjectCost: this.totalProjectCost,
            loi: this.loiID
          }

          //call the service
          this.createLoiInfoService.createLoiInfo(infoBody)
            .subscribe(
              (result) => {

                console.log('Org Info Created', result.result);
                this.loiInfo = result.result;

                console.log('new this.loiInfo.id', this.loiInfo.id);

                //route to user page
                this.router.navigate(['/user']);

              },
              err => console.log(err)
            );


        },
        err => console.log(err)
      );

  }//end of createLOI

  checkCostAmounts() {

    if (this.amountRequested > this.totalProjectCost) {

      this.costMessage = "Amount Requested must be lesser than the Total Project Cost."

      this.ShowCostMessage = true;
      this.ValidAmountRequested = false;
      this.ValidTotalProjectCost = false;

    }
    else if (this.totalProjectCost == '' && this.amountRequested == '') {
      this.costMessage = "Total Project Cost and Amount Requested must be positive."

      this.ShowCostMessage = true;
      this.ValidAmountRequested = false;
      this.ValidTotalProjectCost = false;
    }
    else if (this.totalProjectCost == '') {

      this.costMessage = "Total Project Cost must be positive."

      this.ShowCostMessage = true;
      this.ValidAmountRequested = false;
      this.ValidTotalProjectCost = false;

    }
    else if (this.amountRequested == '') {
      this.costMessage = "Amount Requested must be positive."

      this.ShowCostMessage = true;
      this.ValidAmountRequested = false;
      this.ValidTotalProjectCost = false;
    }
    else {
      this.ShowCostMessage = false;
      this.ValidAmountRequested = true;
      this.ValidTotalProjectCost = true;
    }

    this.verifyInput();

  }

}
