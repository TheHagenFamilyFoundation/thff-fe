import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GetOrganizationService } from '../services/organization/get-organization.service';

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

}
