import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

//Services
import { CreateLoiInfoService } from '../../services/loi/loi-info/create-loi-info.service';
import { GetLoiInfoService } from '../../services/loi/loi-info/get-loi-info.service';
import { DeleteLoiInfoService } from '../../services/loi/loi-info/delete-loi-info.service';

import { AuthService } from '../../auth/auth.service';

//debounce
import { Subject, TimeoutError } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-letter-of-intent-info',
  templateUrl: './letter-of-intent-info.component.html',
  styleUrls: ['./letter-of-intent-info.component.css']
})
export class LetterOfIntentInfoComponent implements OnInit {

  API_URL: string;

  @Input()
  loi: any;

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

  outputamountRequested: string;
  outputTotalProjectCost: string;


  loaded = false;

  ShowMessage = false;
  message: any;

  ShowCostMessage = false;
  costMessage: any;

  editing = false;

  canSave = true;

  startDate: any;
  endDate: any;

  constructor(
    private createLoiInfoService: CreateLoiInfoService,
    private getLoiInfoService: GetLoiInfoService,
    private deleteLoiInfoService: DeleteLoiInfoService,
    private authService: AuthService,
  ) {

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
        this.startDate = this.getFormattedDate(this.startDate);

        this.projectStartDateChange()
      });

    this.projectEndDate$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.projectEndDate = new FormControl(new Date(term).toISOString());

        this.endDate = this.projectEndDate.value;
        this.endDate = this.getFormattedDate(this.endDate);

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

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)


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


  ngOnInit() {

    console.log('this.loi', this.loi)

    console.log('this.loi.loiID', this.loi.loiID)
    this.loiID = this.loi.id;

    this.getLoiInfo();

  }

  getLoiInfo() {

    console.log('getting Loi Info')

    this.getLoiInfoService.getLoiInfobyLoiID(this.loiID)
      .subscribe(
        (loiInfo) => {

          if (loiInfo.length > 0) {
            console.log('loiInfo', loiInfo);
            this.loiInfo = loiInfo[0];

            console.log('this.loiInfo.id', this.loiInfo.id)

            this.setFields();
          }
          else {
            //default values

            this.defaultValues();

          }

        })

  }

  createLoiInfo(body) {

    //call the service
    this.createLoiInfoService.createLoiInfo(body)
      .subscribe(
        (result) => {

          console.log('Org Info Created', result.result);
          this.loiInfo = result.result;

          console.log('new this.loiInfo.id', this.loiInfo.id);

        },
        err => console.log(err)
      );

  }

  deleteLoiInfo() {

    console.log('getting Loi Info')

    this.deleteLoiInfoService.deleteLoiInfobyLoiInfoID(this.loiInfo.id)
      .subscribe(
        (result) => {

          console.log('result', result)

          return result;

        })

  }

  setFields() {

    console.log('setting fields')

    if (this.loiInfo) {

      if (this.loiInfo.projectTitle) {
        this.projectTitle = this.loiInfo.projectTitle;
      }

      if (this.loiInfo.purpose) {
        this.purpose = this.loiInfo.purpose;
      }

      if (this.loiInfo.projectStartDate) {
        this.projectStartDate = new FormControl(new Date(this.loiInfo.projectStartDate));

        console.log('this.projectStartDate', this.projectStartDate.value);

        this.startDate = this.projectStartDate.value;
        this.startDate = this.getFormattedDate(this.startDate);

      }

      if (this.loiInfo.projectEndDate) {
        this.projectEndDate = new FormControl(new Date(this.loiInfo.projectEndDate));

        console.log('this.projectEndDate', this.projectEndDate.value);

        this.endDate = this.projectEndDate.value;
        this.endDate = this.getFormattedDate(this.endDate);

      }

      if (this.loiInfo.amountRequested) {
        this.amountRequested = this.loiInfo.amountRequested;
      }

      if (this.loiInfo.totalProjectCost) {
        this.totalProjectCost = this.loiInfo.totalProjectCost;
      }

    }
    else {
      console.log('default values')
    }

  }

  edit() {
    console.log('edit pressed')

    this.editing = true;

  }

  save() {
    console.log('save pressed')
    //the first time is create - the second time is a delete and create

    //console.log('this.loiInfo.id', this.loiInfo.id)

    this.editing = false;

    var body = {
      projectTitle: this.projectTitle,
      purpose: this.purpose,
      projectStartDate: this.projectStartDate.value,
      projectEndDate: this.projectEndDate.value,
      amountRequested: this.amountRequested,
      totalProjectCost: this.totalProjectCost,
      loi: this.loiID
    }

    console.log('body', body)

    if (this.loiInfo) {

      this.deleteLoiInfoService.deleteLoiInfobyLoiInfoID(this.loiInfo.id)
        .subscribe(
          (result) => {

            console.log('result', result)

            this.createLoiInfo(body);

          })

    }
    else {

      this.createLoiInfo(body);

    }

  }

  //cancel changes, retrieve the old from the db
  cancel() {
    this.editing = false;

    this.getLoiInfo();

  }

  projectTitleChange() {
    console.log("projectTitleChange");

    this.ShowMessage = false;

  }

  purposeChange() {
    console.log("purposeChange");

    this.ShowMessage = false;

  }

  projectStartDateChange() {
    console.log("projectStartDateChange");

    this.ShowMessage = false;

  }

  projectEndDateChange() {
    console.log("projectEndDateChange");

    this.ShowMessage = false;

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

  checkCostAmounts() {

    if (this.amountRequested > this.totalProjectCost) {

      this.costMessage = "Amount Requested must be lesser than the Total Project Cost."

      this.ShowCostMessage = true;
      this.canSave = false;

    }
    else if (this.totalProjectCost == '' && this.amountRequested == '') {
      this.costMessage = "Total Project Cost and Amount Requested must be positive."

      this.ShowCostMessage = true;
      this.canSave = false;
    }
    else if (this.totalProjectCost == '') {

      this.costMessage = "Total Project Cost must be positive."

      this.ShowCostMessage = true;
      this.canSave = false;

    }
    else if (this.amountRequested == '') {
      this.costMessage = "Amount Requested must be positive."

      this.ShowCostMessage = true;
      this.canSave = false;
    }
    else {
      this.ShowCostMessage = false;
      this.canSave = true;
    }

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

  doSomething(event) {

    console.log('do something', event)

  }

}
