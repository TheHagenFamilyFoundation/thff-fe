import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { LOIStatusService } from "../../services/loi/loi-status.service";

@Component({
  selector: 'app-letter-of-intent-status',
  templateUrl: './letter-of-intent-status.component.html',
  styleUrls: ['./letter-of-intent-status.component.css']
})
export class LetterOfIntentStatusComponent implements OnInit {

  @Input()
  loi: any;
  loiID: any;

  org: any;
  orgName: any;
  orgID: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string

  status: number;
  outputStatus: string;

  FullProposal: boolean;

  constructor(
    private loiStatus: LOIStatusService,
    public dialog: MatDialog,
    private router: Router) {
    //for testing purposes
    this.FullProposal = false;

  }

  ngOnInit() {

    console.log('loi status - loi', this.loi)

    this.org = this.loi.organization;
    this.orgID = this.org.organizationID;
    this.orgName = this.org.name;

    this.loiID = this.loi.loiID;

    this.status = this.loi.status;

    //set status
    this.setStatus(this.status);

    this.loiStatus.currentStatus.subscribe(status => this.status = Number(status))

  }

  setStatus(s: number) {

    this.outputStatus = this.configureStatus(s);

    this.checkFPportal();

  }

  //takes in a status s that is a number
  configureStatus(s: number): string {

    return this.loiStatus.getStatus(s)

  }

  checkFPportal() {

    console.log('checkFPportal - this.status', this.status)

    if (this.status == 6) {

      this.FullProposal = true

    }

  }

  createFP() {

    console.log('create full proposal');

    this.router.navigate(['/create-fp-full/', this.orgID, this.loiID]);

  }

}
