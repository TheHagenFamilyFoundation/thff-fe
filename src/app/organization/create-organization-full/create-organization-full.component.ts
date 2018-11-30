import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

//Services
import { CreateOrganizationService } from '../../services/organization/create-organization.service';

import { CreateOrganizationInfoService } from '../../services/organization/organization-info/create-organization-info.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-organization-full',
  templateUrl: './create-organization-full.component.html',
  styleUrls: ['./create-organization-full.component.css']
})
export class CreateOrganizationFullComponent implements OnInit {

  orgName$ = new Subject<string>();
  description$ = new Subject<string>();

  orgName: any; //string
  description: any; //string

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
  currentOperatingBudget: string; // -Current Operating Budget 
  director: string; // -Executive Director 
  phone: string; // -Phone Number 
  contactPerson: string; //-Contact person/title/phone number 
  contactPersonTitle: string;
  contactPersonPhoneNumber: string;
  email: string; // -Email Address 
  address: string; //-Address (principal/administrative office) 
  city: string; // -City 
  state: string;// -State 
  zip: number;//-Zip 
  fax: string; //-Fax Number

  message: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string

  ShowMessage = false;

  showCurrentOperatingBudgetMessage = false;
  currentOperatingBudgetMessage: any;


  CanCreateOrg = false;

  ValidOrgName = false;
  ValidLegalName = false;
  ValidYearFounded = false;
  ValidCurrentOperatingBudget = false;
  ValidDirector = false;
  ValidPhone = false;
  ValidContactPerson = false;
  ValidContactPersonTitle = false;
  ValidContactPersonPhoneNumber = false;
  ValidEmail = false;
  ValidAddress = false;
  ValidCity = false;
  ValidState = false;
  ValidZip = false;

  formContactPerson: FormGroup;
  formOrganization: FormGroup;
  formFax: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private createOrganizationService: CreateOrganizationService,
    private createOrganizationInfoService: CreateOrganizationInfoService,
    fb: FormBuilder
  ) {


    //retreive the parameter
    this.route.params.subscribe(params => {
      console.log(params);
      this.orgName = params.name;
    });

    this.formContactPerson = fb.group({
      contactPersonPhoneNumber: ['']
    })

    this.formOrganization = fb.group({
      phone: ['']
    })

    this.formFax = fb.group({
      fax: ['']
    })


    //create organization

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

    //organization-info

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

    // this.currentOperatingBudget$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.currentOperatingBudget = Number(term);
    //     this.currentOperatingBudgetChange()
    //   });

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

        this.phone = term;
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

        this.contactPersonPhoneNumber = term;
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

        this.fax = term;
        this.faxChange()
      });



  }//end of constructor

  ngOnInit() {

    this.getUserName();

  }

  getUserName() {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userName = this.user.username
      this.userId = this.user.id;
    }
    else {
      //not logged in - redirect to home?
    }

  }//end of getUserName

  //create organization field changes

  orgNameChange() {

    console.log('organization name change');
    if (this.orgName != "") {

      this.ValidOrgName = true;

    }
    else {

      this.ValidOrgName = true;

    }

    this.VerifyInput();

  }

  //description is not required
  descriptionChange() {

    console.log('description change')

    //not required
    this.VerifyInput();

  }

  createOrg() {

    var createOrgBody = {
      name: this.orgName,
      description: this.description,
      username: this.userName,
      userid: this.userId,//userid of user who created the organization
    }

    //call the service
    this.createOrganizationService.createOrganization(createOrgBody)
      .subscribe(
        (result) => {
          console.log('Org Created');
          console.log('result', result);

          this.orgID = result.result.id;

          var createOrgInfoBody = {
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

          //call the service
          this.createOrganizationInfoService.createOrganizationInfo(createOrgInfoBody)
            .subscribe(
              (result) => {

                console.log('result', result)

                //route 
                this.router.navigate(['/home']);

              },
              err => console.log(err)
            );


        },
        err => console.log(err)
      );



  }

  //organization info field changes

  legalNameChange() {
    console.log("legalNameChange");

    this.ShowMessage = false;

    if (this.legalName != "") {

      this.ValidLegalName = true;

    }
    else {

      this.ValidLegalName = true;

    }

    this.VerifyInput();


  }

  yearFoundedChange() {
    console.log("yearFoundedChange");

    this.ShowMessage = false;

    if (this.yearFounded != 0) {

      this.ValidYearFounded = true;

    }
    else {

      this.ValidYearFounded = true;

    }

    this.VerifyInput();

  }

  currentOperatingBudgetChange(event) {
    console.log("currentOperatingBudgetChange", event);

    if (this.currentOperatingBudget == '') {

      this.currentOperatingBudgetMessage = "Current Operating Budget must be positive."

      this.showCurrentOperatingBudgetMessage = true;
      this.ValidCurrentOperatingBudget = false;
      console.log('showing current op message')

    }
    else {
      this.showCurrentOperatingBudgetMessage = false;
      this.ValidCurrentOperatingBudget = true;

    }


    this.ShowMessage = false;

    this.VerifyInput();

  }

  directorChange() {
    console.log("directorChange");

    this.ShowMessage = false;

    if (this.director != "") {

      this.ValidDirector = true;

    }
    else {

      this.ValidDirector = true;

    }

    this.VerifyInput();

  }

  stateChange() {
    console.log("stateChange");

    this.ShowMessage = false;

    if (this.state != "") {

      this.ValidState = true;

    }
    else {

      this.ValidState = true;

    }

    this.VerifyInput();

  }

  cityChange() {
    console.log("cityChange");

    this.ShowMessage = false;

    if (this.city != "") {

      this.ValidCity = true;

    }
    else {

      this.ValidCity = true;

    }

    this.VerifyInput();

  }

  addressChange() {
    console.log("addressChange");

    this.ShowMessage = false;

    if (this.address != "") {

      this.ValidAddress = true;

    }
    else {

      this.ValidAddress = true;

    }

    this.VerifyInput();

  }

  emailChange() {
    console.log("emailChange");

    this.ShowMessage = false;

    if (this.email != "") {

      this.ValidEmail = true;

    }
    else {

      this.ValidEmail = true;

    }

    this.VerifyInput();

  }

  contactPersonChange() {
    console.log("contactPersonChange");

    this.ShowMessage = false;

    if (this.contactPerson != "") {

      this.ValidContactPerson = true;

    }
    else {

      this.ValidContactPerson = true;

    }

    this.VerifyInput();

  }

  contactPersonTitleChange() {
    console.log("contactPersonTitleChange");

    this.ShowMessage = false;

    if (this.contactPersonTitle != "") {

      this.ValidContactPersonTitle = true;

    }
    else {

      this.ValidContactPersonTitle = true;

    }

    this.VerifyInput();

  }

  contactPersonPhoneNumberChange() {
    console.log("contactPersonPhoneNumberChange");

    this.ShowMessage = false;

    if (this.contactPersonPhoneNumber != '') {

      this.ValidContactPersonPhoneNumber = true;

    }
    else {

      this.ValidContactPersonPhoneNumber = true;

    }

    this.VerifyInput();

  }

  phoneChange() {
    console.log("phoneChange");

    this.ShowMessage = false;

    if (this.phone != '') {

      this.ValidPhone = true;

    }
    else {

      this.ValidPhone = true;

    }

    this.VerifyInput();

  }

  zipChange() {
    console.log("zipChange");

    this.ShowMessage = false;

    if (this.zip != 0) {

      this.ValidZip = true;

    }
    else {

      this.ValidZip = true;

    }

    this.VerifyInput();

  }

  faxChange() {
    console.log("faxChange");

    this.ShowMessage = false;

    //not required

    this.VerifyInput();

  }

  VerifyInput(): void {

    if (this.ValidLegalName
      && this.ValidYearFounded
      && this.ValidCurrentOperatingBudget
      && this.ValidDirector
      && this.ValidPhone
      && this.ValidContactPerson
      && this.ValidContactPersonTitle
      && this.ValidContactPersonPhoneNumber
      && this.ValidEmail
      && this.ValidAddress
      && this.ValidCity
      && this.ValidState
      && this.ValidZip

    ) {
      this.CanCreateOrg = true;
    }
    else {
      this.CanCreateOrg = false;
    }

  }

}
