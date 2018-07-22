import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//services
import { GetOrganizationService } from '../../../../services/organization/get-organization.service';

import { Get501c3Service } from '../../../../services/organization/501c3/get-501c3.service'; //query db and get from AWS

import { Validate501c3Service } from '../../../../services/organization/501c3/validate-501c3.service'; //query db and get from AWS

import { Validate501c3CheckComponent } from '../../../../director/director-organizations/director-view-organization/director-view-organization-doc501c3/validate501c3-check/validate501c3-check.component';

@Component({
  selector: 'app-director-view-organization-doc501c3',
  templateUrl: './director-view-organization-doc501c3.component.html',
  styleUrls: ['./director-view-organization-doc501c3.component.css']
})
export class DirectorViewOrganizationDoc501c3Component implements OnInit {

  @Input()
  org: any;

  //5 character string
  orgID: any;

  //mongodb id
  organizationID: any;

  doc501c3: any;

  //check basic row height
  basicRowHeight = 150;

  HasUpload501c3 = false;

  constructor(
    private router: Router,
    public getOrgService: GetOrganizationService,
    private get501c3Service: Get501c3Service,
    private validate501c3Service: Validate501c3Service,
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

            this.doc501c3 = this.org.doc501c3[0];

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

  validate501c3() {

    this.openSelectedOrgDialog(this.doc501c3);

  }

  openSelectedOrgDialog(doc501c3): void {

    console.log('doc501c3', this.doc501c3);

    let dialogRef = this.dialog.open(Validate501c3CheckComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      console.log('result', result); //debug

    });
  }


}
