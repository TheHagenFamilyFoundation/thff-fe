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

  orgID: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit() {
    // will log the entire data object
    console.log('this.data', this.data)

    this.orgID = this.data.orgID;

    this.link = this.orgLink + this.data.orgID;

    console.log('this is the link', this.link);

  }

  cancel() {

    console.log('cancel pressed');

  }

}
