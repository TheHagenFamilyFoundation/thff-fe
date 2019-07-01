import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-director-selected-fp',
  templateUrl: './director-selected-fp.component.html',
  styleUrls: ['./director-selected-fp.component.css']
})
export class DirectorSelectedFPComponent implements OnInit {

  fpLink = '/director-fp/'
  link: string;

  fp: any;
  fpID: any;

  HasFP: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) {

    this.HasFP = false;

  }

  ngOnInit() {
    // will log the entire data object
    console.log('this.data', this.data)
    this.fp = this.data.fp;
    console.log('this.fp', this.fp)
    this.HasFP = true;
    this.fpID = this.data.fpID;

    this.link = this.fpLink + this.fpID;

    console.log('this is the link', this.link);

  }

  cancel() {

    console.log('cancel pressed');

  }

}
