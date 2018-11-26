import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

//Services
import { CreateOrganizationInfoService } from '../../services/organization/organization-info/create-organization-info.service';
import { GetOrganizationInfoService } from '../../services/organization/organization-info/get-organization-info.service';
import { DeleteOrganizationInfoService } from '../../services/organization/organization-info/delete-organization-info.service';

import { AuthService } from '../../auth/auth.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css']
})
export class OrganizationInfoComponent implements OnInit {

  API_URL: string;

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

  loaded = false;

  ShowMessage = false;
  message: any;

  editing = false;

  form: FormGroup;

  constructor(
    private createOrganizationInfoService: CreateOrganizationInfoService,
    private getOrganizationInfoService: GetOrganizationInfoService,
    private deleteOrganizationInfoService: DeleteOrganizationInfoService,
    private authService: AuthService,
    fb: FormBuilder
  ) {

    this.form = fb.group({
      phone: ['']
    })

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

    this.defaultValues();

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

  }//end of constructor

  defaultValues() {

    console.log('defaulting values')

    this.legalName = ''
    this.yearFounded = 0;
    this.currentOperatingBudget = 0;
    this.director = '';
    this.phone = 0;
    this.contactPerson = '';
    this.contactPersonTitle = ''
    this.contactPersonPhoneNumber = 0;
    this.email = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = 0;
    this.fax = 0;

  }

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

          if (orgInfo.length > 0) {

            console.log('orgInfo', orgInfo);
            this.orgInfo = orgInfo[0];

            console.log('this.orgInfo.id', this.orgInfo.id)

            this.setFields();

          }
          else {

            //default values

          }

        })

  }

  createOrganizationInfo(body) {

    //call the service
    this.createOrganizationInfoService.createOrganizationInfo(body)
      .subscribe(
        (result) => {

          console.log('Org Info Created', result.result);
          this.orgInfo = result.result;

          console.log('new this.orgInfo.id', this.orgInfo.id);

        },
        err => console.log(err)
      );

  }

  deleteOrganizationInfo() {

    console.log('getting Organization Info')

    this.deleteOrganizationInfoService.deleteOrgInfobyOrgInfoID(this.orgInfo.id)
      .subscribe(
        (result) => {

          console.log('result', result)

          return result;

        })

  }

  setFields() {

    console.log('setting fields')

    if (this.orgInfo) {
      console.log('yes')

      if (this.orgInfo.legalName) {
        this.legalName = this.orgInfo.legalName;
      }

      if (this.orgInfo.yearFounded) {
        this.yearFounded = this.orgInfo.yearFounded;
      }

      if (this.orgInfo.yearFounded) {
        this.yearFounded = this.orgInfo.yearFounded;
      }

      if (this.orgInfo.currentOperatingBudget) {
        this.currentOperatingBudget = this.orgInfo.currentOperatingBudget;
      }

      if (this.orgInfo.director) {
        this.director = this.orgInfo.director;
      }

      if (this.orgInfo.phone) {
        this.phone = this.orgInfo.phone;
      }

      if (this.orgInfo.contactPerson) {
        this.contactPerson = this.orgInfo.contactPerson;
      }

      if (this.orgInfo.contactPersonTitle) {
        this.contactPersonTitle = this.orgInfo.contactPersonTitle;
      }

      if (this.orgInfo.contactPersonPhoneNumber) {
        this.contactPersonPhoneNumber = this.orgInfo.contactPersonPhoneNumber;
      }

      if (this.orgInfo.email) {
        this.email = this.orgInfo.email;
      }

      if (this.orgInfo.address) {
        this.address = this.orgInfo.address;
      }

      if (this.orgInfo.city) {
        this.city = this.orgInfo.city;
      }

      if (this.orgInfo.state) {
        this.state = this.orgInfo.state;
      }

      if (this.orgInfo.zip) {
        this.zip = this.orgInfo.zip;
      }

      if (this.orgInfo.fax) {
        this.fax = this.orgInfo.fax;
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

    if (this.orgInfo) {
      this.deleteOrganizationInfoService.deleteOrgInfobyOrgInfoID(this.orgInfo.id)
        .subscribe(
          (result) => {

            console.log('result', result)

            this.createOrganizationInfo(body);

          })

    }
    else {

      this.createOrganizationInfo(body);

    }

  }

  //cancel changes, retrieve the old from the db
  cancel() {
    this.editing = false;

    this.getOrganizationInfo();

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
