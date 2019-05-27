import { Component, OnInit } from '@angular/core';

import { SubmissionYearService } from './../../services/admin/submission-year.service';

@Component({
  selector: 'app-submission-year',
  templateUrl: './submission-year.component.html',
  styleUrls: ['./submission-year.component.css']
})
export class SubmissionYearComponent implements OnInit {

  submissionyears = [];
  currentSY: any;

  SubmissionYear: boolean;
  Active: boolean;


  constructor(public submissionYearService: SubmissionYearService) {

    this.SubmissionYear = false;
    this.Active = false;

  }

  ngOnInit() {

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

            console.log('setting the currentSY', this.currentSY)

            this.Active = this.currentSY.active;

          }

        });

        if (noSubmissionYear) {
          this.SubmissionYear = true;
        }


      },
      (err) => {
        console.log('err', err)
      }
    )

  }

  createSubmissionYear() {

    console.log('createSubmissionYear')

    this.submissionYearService.createSubmissionYear()
      .subscribe(
        (sy) => {
          console.log('submission year created', sy)

          this.getSubmissionYears();

        }, (err) => {
          console.log('we have an error', err)
        }

      )

  }

  checkCurrentYear(year) {

    let today = new Date();
    let currentYear = today.getFullYear();

    return year === currentYear;
  }

  closeSubmissionYear() {
    console.log('closeSubmissionYear')

    this.submissionYearService.closeSubmissionYear(this.currentSY).subscribe(
      (sy) => {

        console.log('return from closing - sy', sy)

        this.currentSY = sy;
        this.Active = this.currentSY.active;

      },
      (err) => {
        console.log('err', err)
      }
    )

  }

}
