import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

//Services
import { CreateOrganizationInfoService } from '../../services/organization/organization-info/create-organization-info.service';
import { GetOrganizationInfoService } from '../../services/organization/organization-info/get-organization-info.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css']
})
export class OrganizationInfoComponent implements OnInit {

  API_URL = environment.API_URL;

  @Input()
  org: any;

  orgID: any;

  orgInfo: any;

  legalName$ = new Subject<string>();
  yearFounded$ = new Subject<string>();
  currentOperatingBudget$ = new Subject<string>();
  director$ = new Subject<string>();
  legalNphoneame$ = new Subject<string>();
  phone$ = new Subject<string>();
  contactPerson$ = new Subject<string>();
  contactPersonTitle$ = new Subject<string>();
  contactPersonPhoneNumber$ = new Subject<string>();
  email$ = new Subject<string>();
  address$ = new Subject<string>();
  city$ = new Subject<string>();
  state$ = new Subject<string>();
  zip$ = new Subject<string>();
  fax$ = new Subject<string>();

  legalName: string; //  -Legal Name of Organization Applying: 
  yearFounded: number; // -Year Founded 
  currentOperatingBudget: number; // -Current Operating Budget 
  director: string; // -Executive Director 
  phone: number; // -Phone Number 
  contactPerson: string; //-Contact person/title/phone number 
  contactPersonTitle: string;
  contactPersonPhoneNumber: number;
  email: string; // -Email Address 
  address: string; //-Address (principal/administrative office) 
  city: string; // -City 
  state: string;// -State 
  zip: number;//-Zip 
  fax: number; //-Fax Number

  ShowMessage = false;
  message: any;

  editing = false;

  constructor(
    private createOrganizationInfoService: CreateOrganizationInfoService,
    private getOrganizationInfoService: GetOrganizationInfoService, ) {

    this.legalName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.legalName = term;
        this.legalNameChange()
      });

    this.yearFounded$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.yearFounded = Number(term);
        this.yearFoundedChange()
      });

    this.currentOperatingBudget$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.currentOperatingBudget = Number(term);
        this.currentOperatingBudgetChange()
      });

    this.director$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.director = term;
        this.directorChange()
      });

    this.phone$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.phone = Number(term);
        this.phoneChange()
      });

    this.contactPerson$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.contactPerson = term;
        this.contactPersonChange()
      });

    this.contactPersonTitle$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.contactPersonTitle = term;
        this.contactPersonTitleChange()
      });

    this.contactPersonPhoneNumber$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.contactPersonPhoneNumber = Number(term);
        this.contactPersonPhoneNumberChange()
      });

    this.email$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.email = term;
        this.emailChange()
      });

    this.address$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.address = term;
        this.addressChange()
      });

    this.city$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.city = term;
        this.cityChange()
      });

    this.state$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.state = term;
        this.stateChange()
      });

    this.zip$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.zip = Number(term);
        this.zipChange()
      });

    this.fax$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.fax = Number(term);
        this.faxChange()
      });

  }//end of constructor

  ngOnInit() {

    console.log('this.org', this.org)

    console.log('this.org.organizationID', this.org.organizationID)
    this.orgID = this.org.id;

    this.getOrganizationInfo();

  }

  getOrganizationInfo() {

    console.log('getting Organization Info')

    this.getOrganizationInfoService.getOrgInfobyOrgID(this.orgID)
      .subscribe(
        (orgInfo) => {

          console.log('orgInfo', orgInfo);
          this.orgInfo = orgInfo[0];

          this.setFields();

        })

  }

  setFields() {

    console.log('setting fields')

    this.legalName = this.orgInfo.legalName;
    this.yearFounded = this.orgInfo.yearFounded;
    this.currentOperatingBudget = this.orgInfo.currentOperatingBudget;
    this.director = this.orgInfo.director;
    this.phone = this.orgInfo.phone;
    this.contactPerson = this.orgInfo.contactPerson;
    this.contactPersonTitle = this.orgInfo.contactPersonTitle;
    this.contactPersonPhoneNumber = this.orgInfo.contactPersonPhoneNumber;
    this.email = this.orgInfo.email;
    this.address = this.orgInfo.address;
    this.city = this.orgInfo.city;
    this.state = this.orgInfo.state;
    this.zip = this.orgInfo.zip;

    console.log('zip', this.zip)
    this.fax = this.orgInfo.fax;

  }

  edit() {
    console.log('edit pressed')

    this.editing = true;

  }

  save() {
    console.log('save pressed')
    //the first time is create - the second time is just an update

    this.editing = false;

    var body = {
      legalName: this.legalName,
      yearFounded: this.yearFounded,
      currentOperatingBudget: this.currentOperatingBudget,
      director: this.director,
      phone: this.phone,
      contactPerson: this.contactPerson,
      contactPersonTitle: this.contactPersonTitle,
      contactPersonPhoneNumber: this.contactPersonPhoneNumber,
      email: this.email,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip,
      fax: this.fax,
      organization: this.orgID
    }

    console.log('body', body)

    //call the service
    this.createOrganizationInfoService.createOrganizationInfo(body)
      .subscribe(
        () => { 'Org Info Created' },
        err => console.log(err)
      );

  }

  legalNameChange() {
    console.log("legalNameChange");

    this.ShowMessage = false;

  }

  yearFoundedChange() {
    console.log("yearFoundedChange");

    this.ShowMessage = false;

  }

  currentOperatingBudgetChange() {
    console.log("currentOperatingBudgetChange");

    this.ShowMessage = false;

  }

  directorChange() {
    console.log("directorChange");

    this.ShowMessage = false;

  }

  stateChange() {
    console.log("stateChange");

    this.ShowMessage = false;

  }

  cityChange() {
    console.log("cityChange");

    this.ShowMessage = false;

  }

  addressChange() {
    console.log("addressChange");

    this.ShowMessage = false;

  }

  emailChange() {
    console.log("emailChange");

    this.ShowMessage = false;

  }

  contactPersonChange() {
    console.log("contactPersonChange");

    this.ShowMessage = false;

  }

  contactPersonTitleChange() {
    console.log("contactPersonTitleChange");

    this.ShowMessage = false;

  }

  contactPersonPhoneNumberChange() {
    console.log("contactPersonPhoneNumberChange");

    this.ShowMessage = false;

  }

  phoneChange() {
    console.log("phoneChange");

    this.ShowMessage = false;

  }

  zipChange() {
    console.log("zipChange");

    this.ShowMessage = false;

  }

  faxChange() {
    console.log("faxChange");

    this.ShowMessage = false;

  }




}
