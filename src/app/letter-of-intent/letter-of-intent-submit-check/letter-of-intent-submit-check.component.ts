import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter-of-intent-submit-check',
  templateUrl: './letter-of-intent-submit-check.component.html',
  styleUrls: ['./letter-of-intent-submit-check.component.css']
})
export class LetterOfIntentSubmitCheckComponent implements OnInit {

  loiID: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) {

    //debug
    console.log('data', data)

  }

  ngOnInit() {

  }

  cancel() {

    console.log('cancel pressed');

  }

  submit() {

    console.log('submit pressed')

  }
}
