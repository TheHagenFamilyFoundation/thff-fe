import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-selected-full-proposal',
  templateUrl: './org-selected-full-proposal.component.html',
  styleUrls: ['./org-selected-full-proposal.component.css']
})
export class OrgSelectedFullProposalComponent implements OnInit {

  fpLink = '/fp/'
  link: string;

  fpID: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit() {
    // will log the entire data object
    console.log('this.data', this.data)

    this.fpID = this.data.fpID;

    this.link = this.fpLink + this.data.fpID;

    console.log('this is the link', this.link);

  }

  cancel() {

    console.log('cancel pressed');

  }

}
