import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LetterOfIntentSubmitCheckComponent } from '../letter-of-intent-submit-check/letter-of-intent-submit-check.component';

//LOI
import { SubmitLoiService } from '../../services/loi/submit-loi.service';
import { LOIStatusService } from "../../services/loi/loi-status.service";

//organization
import { GetOrganizationService } from '../../services/organization/get-organization.service';

import { EmailService } from '../../services/user/email.service';

import { GetUserService } from '../../services/user/get-user.service'; //used for getting organizations

import { Get501c3Service } from '../../services/organization/501c3/get-501c3.service'; //query db and get from AWS

import { Doc501c3StatusService } from '../../services/organization/501c3/doc501c3-status.service';

@Component({
  selector: 'app-letter-of-intent-submit',
  templateUrl: './letter-of-intent-submit.component.html',
  styleUrls: ['./letter-of-intent-submit.component.css']
})
export class LetterOfIntentSubmitComponent implements OnInit {

  @Input()
  loi: any;

  status: number;

  loiID: string;
  orgID: string;

  org: any;

  user: any;

  LOISubmitted: boolean;

  CanSubmit: boolean;

  loiLink = '/loi/'
  link: string;

  HasLOIInfo: boolean;
  HasOrgInfo: boolean;
  HasValid501c3: boolean;

  doc501c3status: any; //for the 501c3 doc
  outputStatus: any;

  constructor(
    public dialog: MatDialog,
    private submitLoiService: SubmitLoiService,
    private loiStatus: LOIStatusService,
    public getOrgService: GetOrganizationService,
    private emailService: EmailService,
    private getUserService: GetUserService,
    private get501c3Service: Get501c3Service,
    private doc501c3StatusService: Doc501c3StatusService,
  ) {

    this.HasLOIInfo = false;
    this.HasOrgInfo = false;

    //this.CanSubmit = false; //for prod
    this.CanSubmit = true; //for testing

  }

  ngOnInit() {

    this.LOISubmitted = this.loi.submitted;

    this.loiID = this.loi.loiID;

    this.link = this.loiLink + this.loiID;

    this.loiStatus.currentStatus.subscribe(status => this.status = Number(status))

    this.configureStatus(this.status);

    this.checkCanSubmit();

  }

  checkCanSubmit() {

    //check if loi info is created
    this.checkIfHasLOIInfo();

    //check if org has 501c3
    this.check501c3();

    //check if org has org info as well
    this.checkIfHasOrgInfo();

  }

  checkIfHasLOIInfo() {

    console.log('checking if loi info', this.loi)

    if (this.loi.info[0].validLOIInfo) {
      this.HasLOIInfo = true;
    }
    else {
      //set it back to false just in case
      this.HasLOIInfo = false;
    }

  }

  checkIfHasOrgInfo() {

    console.log('checking if org info')

    this.orgID = this.loi.org;

    this.getOrgService.getOrgbyID(this.orgID)
      .subscribe(
        (org) => {

          console.log('org', org);

          this.org = org[0];

          if (org[0].info[0].validOrgInfo) {
            this.HasOrgInfo = true;
          }
          else {
            this.HasOrgInfo = false;
          }

        })

  }

  check501c3() {

    console.log('check501c3')

    this.orgID = this.loi.org;

    this.get501c3Service.get501c3Info(this.orgID)
      .subscribe(
        (result) => {

          console.log('result', result)

          if (result.length > 0) {

            if (result[0].status == 2) {
              this.HasValid501c3 = true;
              this.setStatus(result[0].status);
            }
            else {

              this.HasValid501c3 = false;
              if (result[0].status == 3) {
                this.setStatus(result[0].status);
              }

            }

          }
          else {
            this.HasValid501c3 = false;
          }

        })

  }

  submitLOI() {

    console.log('submitLOI pressed')

    //bring up modal to confirm submit

    this.openSubmitLOIDialog(this.loi)

  }

  openSubmitLOIDialog(loi): void {
    let dialogRef = this.dialog.open(LetterOfIntentSubmitCheckComponent, {
      width: '300px',
      data: { name: loi.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug

      if (result) {

        console.log('submit pressed - submit')

        this.submit();

      }
      else {

        console.log('cancel pressed - submit')

      }

    });
  }

  submit() {

    console.log('submitting lOI')

    this.submitLoiService.submitLOI(this.loiID)
      .subscribe(
        (loi) => {

          console.log('loi', loi);

          console.log('this.link', this.link)

          this.LOISubmitted = true;

          //send email
          //get the logged in user
          this.user = JSON.parse(localStorage.getItem('currentUser'));

          this.getUserService.getDirectors()
            .subscribe(
              (directors) => {

                console.log('directors', directors)

                console.log('user', this.user)

                console.log('organization', this.org)
                console.log('organizationID', this.org.organizationID)

                directors.forEach(director => {

                  //send the email to the directors that a 501c3 has been uploaded
                  this.emailService.sendViewLOI({
                    //from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
                    to: director.email,
                    name: this.user.username,
                    director: (director.firstName && director.lastName ? director.firstName : director.username),
                    orgName: this.org.name,
                    orgID: this.org.organizationID
                  })
                    .subscribe(
                      (data) => {

                      },
                      err => console.log(err)
                    );

                });

              })

          this.updateStatus('Submitted')

        })

  }

  //s as in status variable
  updateStatus(s: string) {
    this.loiStatus.changeStatus(s)
  }

  canSubmitCheck() {

    if (this.HasLOIInfo && this.HasOrgInfo && this.HasValid501c3) {
      this.CanSubmit = true;
    }
    else {

      this.CanSubmit = false;

    }

  }

  //takes in a status s that is a number
  configureStatus(s: number): string {

    return this.loiStatus.getStatus(s)

  }

  setStatus(s: number) {

    console.log('setStatus', s)

    this.outputStatus = this.configureStatus(s);

    console.log('outputStatus', this.outputStatus)

  }

  //takes in a status s that is a number
  configure501c3Status(s: number): string {

    console.log('configure501c3Status', s)

    return this.doc501c3StatusService.getStatus(s)

  }

}
