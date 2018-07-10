import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//services
import { GetOrganizationService } from '../../services/organization/get-organization.service';

import { Upload501c3Service } from '../../services/organization/501c3/upload-501c3.service';
import { Get501c3Service } from '../../services/organization/501c3/get-501c3.service'; //query db and get from AWS
import { Delete501c3Service } from '../../services/organization/501c3/delete-501c3.service'; //query db and get from AWS

import { Create501c3Service } from '../../services/organization/501c3/create-501c3.service'; //create from DB

//components
import { DeleteDoc501c3CheckComponent } from './delete-doc501c3-check/delete-doc501c3-check.component';

@Component({
  selector: 'app-organization-doc501c3',
  templateUrl: './organization-doc501c3.component.html',
  styleUrls: ['./organization-doc501c3.component.css']
})
export class OrganizationDoc501c3Component implements OnInit {

  //5 character string
  orgID: any;

  //mongodb id
  organizationID: any;

  @Input()
  org: any;

  file: File;

  CanUpload501c3 = false; //true when a file is selected
  HasUpload501c3 = false;

  constructor(private router: Router,
    public getOrgService: GetOrganizationService,
    private upload501c3Service: Upload501c3Service,
    private get501c3Service: Get501c3Service,
    private create501c3Service: Create501c3Service,
    private delete501c3Service: Delete501c3Service,
    public dialog: MatDialog,
  ) {

  }

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
            this.CanUpload501c3 = false;
          }

        })

  }

  fileChange(event) {

    console.log('fileChange', event)

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];

      this.CanUpload501c3 = true;

    }
    else {
      this.CanUpload501c3 = false;
    }

  }

  upload() {

    this.upload501c3Service.upload501c3(this.file, this.orgID)
      .subscribe(
        (result) => {

          console.log('result', result);

          if (result.body) {
            console.log('result has body')

            let body = {
              url: result.body.files[0].extra.Location,
              fileName: result.body.files[0].fd,
              organization: this.organizationID,
              orgID: this.orgID
            }

            this.create501c3Service.create501c3(body)
              .subscribe(
                (result) => {

                  console.log('result', result);

                  if (result.body) {
                    console.log('result has body')
                  }

                  //refresh the organization
                  this.getOrganization(this.orgID);

                },
                err => console.log(err)
              );

          }

        },
        err => console.log(err)
      );

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

  delete501c3check() {

    console.log('delete 501c3')

    this.openDelete501c3Check()

  }

  openDelete501c3Check(): void {
    let dialogRef = this.dialog.open(DeleteDoc501c3CheckComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug

      if (result.delete == true) {
        console.log('delete the 501c3')

        //delete the 501c3
        this.delete501c3();

      }

    });
  }

  delete501c3() {

    console.log('deleting 501c3')

    // console.log('orgID', this.orgID)

    //call the delete 501c3 service
    this.delete501c3Service.delete501c3byOrgID(this.orgID)
      .subscribe(
        (result) => {

          console.log('result', result)

          //refresh the organization
          this.getOrganization(this.orgID);

        })

  }


}