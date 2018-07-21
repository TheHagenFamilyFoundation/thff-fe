import { Component, OnInit, Input } from '@angular/core';

import { GetOrganizationInfoService } from '../../../../services/organization/organization-info/get-organization-info.service';

@Component({
  selector: 'app-director-view-organization-info',
  templateUrl: './director-view-organization-info.component.html',
  styleUrls: ['./director-view-organization-info.component.css']
})
export class DirectorViewOrganizationInfoComponent implements OnInit {

  @Input()
  org: any;

  orgID: any;

  orgInfo: any;

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

  constructor(private getOrganizationInfoService: GetOrganizationInfoService) {

    this.defaultValues();

  }

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


}
