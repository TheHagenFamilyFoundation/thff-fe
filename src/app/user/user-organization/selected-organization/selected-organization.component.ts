import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-organization',
  templateUrl: './selected-organization.component.html',
  styleUrls: ['./selected-organization.component.css']
})
export class SelectedOrganizationComponent implements OnInit {

  orgLink = '/organization/'
  link: string;

  orgId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit() {
    // will log the entire data object
    console.log(this.data)

    this.orgId = this.data.id;

    this.link = this.orgLink + this.data.id;

    console.log('link', this.link);



  }

  cancel() {

    console.log('cancel pressed');

  }

}
