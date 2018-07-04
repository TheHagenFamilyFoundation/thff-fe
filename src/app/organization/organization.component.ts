import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GetOrganizationService } from '../services/organization/get-organization.service';

import { Upload501c3Service } from '../services/organization/upload-501c3.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  orgID: any;

  org: any; //the Organization object

  //check basic row height
  basicRowHeight = 400;

  constructor(
    private route: ActivatedRoute,
    public getOrgService: GetOrganizationService,
    private upload501c3Service: Upload501c3Service,
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

        })

  }

  fileChange(event) {

    console.log('fileChange', event)

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      // let formData: FormData = new FormData();
      // formData.append('uploadFile', file, file.name);

      this.upload501c3Service.upload501c3(file)
        .subscribe(
          () => { '501c3 uploaded' },
          err => console.log(err)
        );

    }
  }

}
