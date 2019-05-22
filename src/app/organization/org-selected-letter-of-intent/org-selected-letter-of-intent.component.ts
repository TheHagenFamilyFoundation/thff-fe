import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-selected-letter-of-intent',
  templateUrl: './org-selected-letter-of-intent.component.html',
  styleUrls: ['./org-selected-letter-of-intent.component.css']
})
export class OrgSelectedLetterOfIntentComponent implements OnInit {

  loiLink = '/loi/'
  link: string;

  loiID: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit() {
    // will log the entire data object
    console.log('this.data', this.data)

    this.loiID = this.data.loiID;

    this.link = this.loiLink + this.data.loiID;

    console.log('this is the link', this.link);

  }

  cancel() {

    console.log('cancel pressed');

  }

}
