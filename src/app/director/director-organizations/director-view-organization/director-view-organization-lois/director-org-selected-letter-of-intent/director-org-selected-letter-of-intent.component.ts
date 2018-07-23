import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-org-selected-letter-of-intent',
  templateUrl: './director-org-selected-letter-of-intent.component.html',
  styleUrls: ['./director-org-selected-letter-of-intent.component.css']
})
export class DirectorOrgSelectedLetterOfIntentComponent implements OnInit {

  loiLink = '/director-loi/'
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
