import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

//Services
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../../services/user/email.service';

import { CreateOrganizationService } from '../../services/organization/create-organization.service';
import { CreateOrganizationInfoService } from '../../services/organization/organization-info/create-organization-info.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-organization-full',
  templateUrl: './create-organization-full.component.html',
  styleUrls: ['./create-organization-full.component.css']
})
export class CreateOrganizationFullComponent implements OnInit {

  orgName: any; //string
  description: any; //string

  orgID: any;
  organizationID: any;

  orgInfo: any;

  orgName$ = new Subject<string>();
  description$ = new Subject<string>(); //not sure
  legalName$ = new Subject<string>();
  yearFounded$ = new Subject<string>();
  currentOperatingBudget$ = new Subject<string>();
  director$ = new Subject<string>();
  // legalNphoneame$ = new Subject<string>();
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
  userEmail: string;

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

  Submitted = false;

  //forms
  formContactPerson: FormGroup;
  formOrganization: FormGroup;
  formFax: FormGroup;

  orgNameFormControl = new FormControl('', [
    Validators.required,
  ])

  // descriptionFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // legalNameFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // yearFoundedFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // currentOperatingBudgetFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // directorFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // phoneFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // contactPersonFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // contactPersonTitleFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  // contactPersonPhoneNumberFormControl = new FormControl('', [
  //   Validators.required,
  // ])

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  addressFormControl = new FormControl('', [
    Validators.required,
  ])

  cityFormControl = new FormControl('', [
    Validators.required,
  ])

  stateFormControl = new FormControl('', [
    Validators.required,
  ])

  zipFormControl = new FormControl('', [
    Validators.required,
  ])


  faxFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private emailService: EmailService,
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
      contactPersonPhoneNumber: new FormControl('', Validators.required),
      contactPersonTitle: new FormControl('', Validators.required),
      contactPerson: new FormControl('', Validators.required),
    })

    this.formOrganization = fb.group({
      legalName: new FormControl('', Validators.required),
      yearFounded: new FormControl('', Validators.required),
      currentOperatingBudget: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
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
      this.userEmail = this.user.email;
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

    console.log('CreateOrg pressed')

    this.Submitted = true;

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
          console.log('1-result', result);

          this.orgID = result.result.id;
          this.organizationID = result.result.organizationID;

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

                console.log('2-result', result)
                console.log('orgID', this.organizationID)

                this.emailService.sendRegisterOrganizationEmail({
                  //from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
                  to: this.userEmail,
                  name: this.userName,
                  orgName: this.organizationID
                })
                  .subscribe(
                    (data) => {

                      //route to the organization page
                      this.router.navigate(['/organization/' + this.organizationID]);

                    },
                    err => {
                      console.log(err)
                      this.Submitted = false;
                    }
                  );

              },
              err => {

                console.log(err)

                this.Submitted = false;
              }
            );

        },
        err => {
          console.log(err)

          this.Submitted = false;
        }
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

      this.ValidLegalName = false;

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

      this.ValidYearFounded = false;

    }

    this.VerifyInput();

  }

  currentOperatingBudgetChange(event) {
    console.log("currentOperatingBudgetChange", event);

    //cannot be blank
    if (this.currentOperatingBudget == '') {

      this.currentOperatingBudgetMessage = "Current Operating Budget must be positive."

      this.showCurrentOperatingBudgetMessage = true;
      this.ValidCurrentOperatingBudget = false;
      console.log('showing current op message')

    }
    else {
      //if there is a value set to true
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

      this.ValidDirector = false;

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

      this.ValidState = false;

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

      this.ValidCity = false;

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

      this.ValidAddress = false;

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

      this.ValidEmail = false;

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

      this.ValidContactPerson = false;

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

      this.ValidContactPersonTitle = false;

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

      this.ValidContactPersonPhoneNumber = false;

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

      this.ValidPhone = false;

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

      this.ValidZip = false;

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
