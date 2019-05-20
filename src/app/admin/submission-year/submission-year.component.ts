import { Component, OnInit } from '@angular/core';

import { SubmissionYearService } from './../../services/admin/submission-year.service';

@Component({
  selector: 'app-submission-year',
  templateUrl: './submission-year.component.html',
  styleUrls: ['./submission-year.component.css']
})
export class SubmissionYearComponent implements OnInit {

  submissionyears = [];

  SubmissionYear: boolean;

  constructor(public submissionYearService: SubmissionYearService) {

    this.SubmissionYear = false;

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



    
  }

  checkCurrentYear(year) {

    let today = new Date();
    let currentYear = today.getFullYear();

    return year === currentYear;
  }


}
