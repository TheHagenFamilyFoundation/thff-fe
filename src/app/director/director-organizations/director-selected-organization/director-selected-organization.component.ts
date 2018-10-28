import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-selected-organization',
  templateUrl: './director-selected-organization.component.html',
  styleUrls: ['./director-selected-organization.component.css']
})
export class DirectorSelectedOrganizationComponent implements OnInit {

  orgLink = '/director-organization/'
  link: string;

  org: any;

  orgID: any;

  lois: any;
  users: any;

  hasInfo: any;
  uploaded501c3: any;

  basicRowHeight = 100;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit() {
    // will log the entire data object
    console.log('this.data', this.data)

    this.orgID = this.data.org.organizationID;

    this.org = this.data.org;

    this.link = this.orgLink + this.orgID;

    console.log('this is the link', this.link);

    this.checkOrg();

  }

  cancel() {

    console.log('cancel pressed');

  }

  checkOrg() {
    console.log('checking org')

    if (this.org.users.length > 0) {
      this.users = this.org.users.length;
    }
    else {
      this.users = 0;
    }

    if (this.org.lois.length > 0) {
      this.lois = this.org.lois.length;
    }
    else {
      this.lois = 0;
    }

    if (this.org.info.length > 0) {
      this.hasInfo = true;
    }
    else {
      this.hasInfo = false;
    }

    if (this.org.doc501c3) {
      this.uploaded501c3 = true;
    }
    else {
      this.uploaded501c3 = false;
    }

  }

}
