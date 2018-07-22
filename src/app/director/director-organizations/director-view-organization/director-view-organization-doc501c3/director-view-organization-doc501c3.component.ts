import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//services
import { GetOrganizationService } from '../../../../services/organization/get-organization.service';

import { Get501c3Service } from '../../../../services/organization/501c3/get-501c3.service'; //query db and get from AWS

@Component({
  selector: 'app-director-view-organization-doc501c3',
  templateUrl: './director-view-organization-doc501c3.component.html',
  styleUrls: ['./director-view-organization-doc501c3.component.css']
})
export class DirectorViewOrganizationDoc501c3Component implements OnInit {

  //5 character string
  orgID: any;

  //mongodb id
  organizationID: any;

  @Input()
  org: any;

  //check basic row height
  basicRowHeight = 150;

  HasUpload501c3 = false;

  constructor(
    private router: Router,
    public getOrgService: GetOrganizationService,
    private get501c3Service: Get501c3Service,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

    console.log('this.org', this.org)

    //input org - get the id
    this.orgID = this.org.organizationID;

    console.log('orgID', this.orgID)

    this.getOrganization(this.orgID);

  }

  getOrganization(orgID) {

    console.log('check organizations');

    //query database for that organization

    this.getOrgService.getOrgbyID(orgID)
      .subscribe(
        (org) => {

          console.log('org', org);

          this.org = org[0];

          this.organizationID = this.org.id;

          //get organization s3 501c3 if exists

          if (this.org.doc501c3.length > 0) {

            console.log('has 501c3')
            this.HasUpload501c3 = true;

          }
          else {
            this.HasUpload501c3 = false;
          }

        })

  }

  get501c3() {

    console.log('getting 501c3')

    this.get501c3Service.get501c3(this.orgID)
      .subscribe(
        (result) => {

          console.log('result', result)

          //route to the s3 image url
          let url = result.url;

          //this.router.navigate([result.url]);
          this.router.navigate(['/externalRedirect', { externalUrl: url }], {
            skipLocationChange: true,
          });

        })

  }

}
