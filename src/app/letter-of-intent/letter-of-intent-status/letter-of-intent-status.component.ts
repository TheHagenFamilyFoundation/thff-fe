import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { LOIStatusService } from "../../services/loi/loi-status.service";
import { GetFullProposalService } from "../../services/full-proposal/get-full-proposal.service";

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

  fpLink: string;

  FullProposalPortalOpen: boolean;
  HasFullProposal: boolean;

  constructor(
    private loiStatus: LOIStatusService,
    public dialog: MatDialog,
    private router: Router,
    public getFullProposalService: GetFullProposalService
  ) {

    this.HasFullProposal = false; //check in db
    this.FullProposalPortalOpen = false; //the portal

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

    this.checkFullProposal();

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

      this.FullProposalPortalOpen = true;

    }

  }

  createFP() {

    console.log('create full proposal');

    this.router.navigate(['/create-fp-full/', this.orgID, this.loiID]);

  }

  checkFullProposal() {
    this.getFullProposalService.getFullProposalsByLOIID(this.loi)
      .subscribe((fps) => {

        //debugging
        console.log('fp', fps)

        if (fps.length > 0) {

          this.HasFullProposal = true;

          //create the fp link - first one
          this.fpLink = '/fp/' + fps[0].fpID

        }
        else {

          this.HasFullProposal = false;

        }

      },
        (err) => {
          console.log('err', err)
        })
  }

}
