import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

//Services
import { CreateLoiInfoService } from '../../services/loi/loi-info/create-loi-info.service';
import { GetLoiInfoService } from '../../services/loi/loi-info/get-loi-info.service';
import { DeleteLoiInfoService } from '../../services/loi/loi-info/delete-loi-info.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-letter-of-intent-info',
  templateUrl: './letter-of-intent-info.component.html',
  styleUrls: ['./letter-of-intent-info.component.css']
})
export class LetterOfIntentInfoComponent implements OnInit {

  API_URL = environment.API_URL;

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

  projectTitle: string; //  -Legal Name of Organization Applying: 
  purpose: string; // -Year Founded 
  projectStartDate: string; // -Current Operating Budget 
  projectEndDate: string; // -Executive Director 
  amountRequested: string; // -Phone Number 
  totalProjectCost: string; //-Contact person/title/phone number 

  loaded = false;

  ShowMessage = false;
  message: any;

  editing = false;


  constructor(
    private createLoiInfoService: CreateLoiInfoService,
    private getLoiInfoService: GetLoiInfoService,
    private deleteLoiInfoService: DeleteLoiInfoService,
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

        this.projectStartDate = term;
        this.projectStartDateChange()
      });

    this.projectEndDate$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.projectEndDate = term;
        this.projectEndDateChange()
      });

    this.amountRequested$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.amountRequested = term;
        this.amountRequestedChange()
      });

    this.totalProjectCost$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.totalProjectCost = term;
        this.totalProjectCostChange()
      });

    this.defaultValues();

  }

  defaultValues() {

    console.log('defaulting values')

    this.projectTitle = ''
    this.purpose = '';
    this.projectStartDate = '';
    this.projectEndDate = '';
    this.amountRequested = '';
    this.totalProjectCost = '';

  }


  ngOnInit() {

    console.log('this.loi', this.loi)

    console.log('this.org.organizationID', this.loi.loiID)
    this.loiID = this.loi.id;

    this.getLoiInfo();

  }

  getLoiInfo() {

    console.log('getting Loi Info')

    this.getLoiInfoService.getLoiInfobyLoiID(this.loiID)
      .subscribe(
        (loiInfo) => {

          console.log('orgInfo', loiInfo);
          this.loiInfo = loiInfo[0];

          console.log('this.loiInfo.id', this.loiInfo.id)

          this.setFields();

        })

  }

  createLoiInfo(body) {

    //call the service
    this.createLoiInfoService.createLoiInfo(body)
      .subscribe(
        (result) => {

          console.log('Org Info Created', result.result);
          this.loiInfo.id = result.result.id;

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
      console.log('yes')

      if (this.loiInfo.legalName) {
        this.projectTitle = this.loiInfo.projectTitle;
      }

      if (this.loiInfo.purpose) {
        this.purpose = this.loiInfo.purpose;
      }

      if (this.loiInfo.projectStartDate) {
        this.projectStartDate = this.loiInfo.projectStartDate;
      }

      if (this.loiInfo.projectEndDate) {
        this.projectEndDate = this.loiInfo.projectEndDate;
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
    //the first time is create - the second time is just an update

    console.log('this.loiInfo.id', this.loiInfo.id)

    this.editing = false;

    var body = {
      projectTitle: this.projectTitle,
      purpose: this.purpose,
      projectStartDate: this.projectStartDate,
      projectEndDate: this.projectEndDate,
      amountRequested: this.amountRequested,
      totalProjectCost: this.totalProjectCost,
    }

    console.log('body', body)

    this.deleteLoiInfoService.deleteLoiInfobyLoiInfoID(this.loiInfo.id)
      .subscribe(
        (result) => {

          console.log('result', result)

          this.createLoiInfo(body);

        })

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

  amountRequestedChange() {
    console.log("amountRequestedChange");

    this.ShowMessage = false;

  }

  totalProjectCostChange() {
    console.log("totalProjectCostChange");

    this.ShowMessage = false;

  }

}
