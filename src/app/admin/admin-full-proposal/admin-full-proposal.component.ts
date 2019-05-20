import { Component, OnInit, Input } from '@angular/core';

import { OpenFpPortalService } from './../../services/full-proposal/open-fp-portal.service';
import { SubmissionYearService } from './../../services/admin/submission-year.service';

@Component({
  selector: 'app-admin-full-proposal',
  templateUrl: './admin-full-proposal.component.html',
  styleUrls: ['./admin-full-proposal.component.css']
})
export class AdminFullProposalComponent implements OnInit {

  @Input()
  user: any

  accessLevel: number;

  Opened: boolean;

  submissionyears = [];
  SubmissionYear: boolean;
  currentSY: any; //toggleable

  constructor(
    public openFpPortalService: OpenFpPortalService,
    public submissionYearService: SubmissionYearService
  ) {

    this.Opened = false;

  }

  ngOnInit() {

    console.log('this.user', this.user)

    this.accessLevel = this.user.accessLevel

    this.getSubmissionYears();

  }

  getSubmissionYears() {

    this.submissionYearService.getSubmissionYears().subscribe(
      (sys) => {

        console.log('get submission years', sys)

        let noSubmissionYear = false;


        sys.forEach(sy => {

          if (this.checkCurrentYear(sy.year)) {
            noSubmissionYear = true;

            this.currentSY = sy;
          }

        });

        if (noSubmissionYear) {

          //show the message saying no submission year has been created

          this.SubmissionYear = true;

          if (this.currentSY.fpPortal) {
            this.Opened = false;
          }


        }


      },
      (err) => {
        console.log('err', err)
      }
    )

  }

  openFullProposalPortal(data) {

    //temp - get current year
    //possibly show an array of the years
    let today = new Date();
    let currentYear = today.getFullYear();

    let body = {
      open: data,
      sy: this.currentSY
    }

    //debug
    console.log('openFullProposalPortal', body)

    this.openFpPortalService.openFPs(body).subscribe(
      (lois) => {

        console.log('portals are open lois', lois)

        this.getSubmissionYear(this.currentSY.id)

      },
      (err) => {
        console.log('err', err)
      }


    )


  }

  // checkOpenFPportal() {
  //   if (this.loi.openFp == true) {
  //     this.Opened = true;
  //   }
  //   else {
  //     this.Opened = false;
  //   }
  // }

  checkCurrentYear(year) {

    let today = new Date();
    let currentYear = today.getFullYear();

    return year === currentYear;
  }

  getSubmissionYear(id) {
    //debug
    console.log('getSubmissionYear', id)

    //return 1 submission year
    this.submissionYearService.getSubmissionYear(id).subscribe(
      (sy) => {

        console.log('setting currentSY', sy)
        this.currentSY = sy;

        if (this.currentSY.fpPortal) {
          this.Opened = true;
        }
        else {
          this.Opened = false;
        }

        console.log('after getting SY - this.Opened', this.Opened)


      },
      (err) => {
        console.log('err', err)
      })
  }


}
