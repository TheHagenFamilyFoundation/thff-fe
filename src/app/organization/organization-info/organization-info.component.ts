import { Component, OnInit, Input } from '@angular/core';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css']
})
export class OrganizationInfoComponent implements OnInit {

  @Input()
  org: any;

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

  constructor() {

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
  }

  edit() {
    console.log('edit pressed')

    this.editing = true;

  }

  save() {
    console.log('save pressed')

    this.editing = false;
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
