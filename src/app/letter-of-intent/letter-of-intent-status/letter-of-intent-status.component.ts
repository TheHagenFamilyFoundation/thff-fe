import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-of-intent-status',
  templateUrl: './letter-of-intent-status.component.html',
  styleUrls: ['./letter-of-intent-status.component.css']
})
export class LetterOfIntentStatusComponent implements OnInit {

  @Input()
  loi: any;

  status: any;

  HasInfo: boolean;

  constructor() {

    this.HasInfo = false;

  }

  ngOnInit() {

    console.log('loi', this.loi)

    //set status
    this.setStatus();

    //check if loi info is created
    this.checkIfHasInfo();

  }

  setStatus() {

    this.status = this.loi.status;

  }


  checkIfHasInfo() {

    if (this.loi.info.length > 0) {
      this.HasInfo = true;
    }
    else {
      //set it back to false just in case
      this.HasInfo = false;
    }

  }


}
