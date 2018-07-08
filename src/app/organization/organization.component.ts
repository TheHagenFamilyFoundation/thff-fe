import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { GetOrganizationService } from '../services/organization/get-organization.service';

// import { Upload501c3Service } from '../services/organization/501c3/upload-501c3.service';
// import { Get501c3Service } from '../services/organization/501c3/get-501c3.service'; //query db and get from AWS

// import { Create501c3Service } from '../services/organization/501c3/create-501c3.service'; //create from DB

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgID: any;

  organizationID: any;

  org: any; //the Organization object

  //check basic row height
  basicRowHeight = 400;

  // file: File;

  // CanUpload501c3 = false; //true when a file is selected
  // HasUpload501c3 = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public getOrgService: GetOrganizationService,
    // private upload501c3Service: Upload501c3Service,
    // private get501c3Service: Get501c3Service,
    // private create501c3Service: Create501c3Service,
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.orgID = params.id;
    });
  }

  ngOnInit() {

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

          // if (this.org.doc501c3.length > 0) {

          //   console.log('has 501c3')
          //   this.HasUpload501c3 = true;

          // }

        })

  }

  // fileChange(event) {

  //   console.log('fileChange', event)

  //   let fileList: FileList = event.target.files;
  //   if (fileList.length > 0) {
  //     this.file = fileList[0];

  //     this.CanUpload501c3 = true;

  //   }
  //   else {
  //     this.CanUpload501c3 = false;
  //   }

  // }

  // upload() {

  //   this.upload501c3Service.upload501c3(this.file, this.orgID)
  //     .subscribe(
  //       (result) => {

  //         console.log('result', result);

  //         if (result.body) {
  //           console.log('result has body')

  //           let body = {
  //             url: result.body.files[0].extra.Location,
  //             fileName: result.body.files[0].fd,
  //             organization: this.organizationID,
  //             orgID: this.orgID
  //           }

  //           this.create501c3Service.create501c3(body)
  //             .subscribe(
  //               (result) => {

  //                 console.log('result', result);

  //                 if (result.body) {
  //                   console.log('result has body')
  //                 }

  //                 //refresh the organization
  //                 this.getOrganization(this.orgID);

  //               },
  //               err => console.log(err)
  //             );

  //         }

  //       },
  //       err => console.log(err)
  //     );

  // }

  // get501c3() {

  //   console.log('getting 501c3')

  //   this.get501c3Service.get501c3(this.orgID)
  //     .subscribe(
  //       (result) => {

  //         console.log('result', result)

  //         //route to the s3 image url
  //         let url = result.url;

  //         //this.router.navigate([result.url]);
  //         this.router.navigate(['/externalRedirect', { externalUrl: url }], {
  //           skipLocationChange: true,
  //         });


  //       })

  // }
  // delete501c3() {

  //   console.log('delete 501c3')



  // }


}
