import { Component, OnInit, Input } from '@angular/core';

import { LOIStatusService } from "../../services/loi/loi-status.service";

@Component({
  selector: 'app-letter-of-intent-status',
  templateUrl: './letter-of-intent-status.component.html',
  styleUrls: ['./letter-of-intent-status.component.css']
})
export class LetterOfIntentStatusComponent implements OnInit {

  @Input()
  loi: any;

  status: number;

  constructor(private loiStatus: LOIStatusService) {

  }

  ngOnInit() {

    console.log('loi', this.loi)

    //set status
    this.setStatus();

    this.loiStatus.currentStatus.subscribe(status => this.status = Number(status))

  }

  setStatus() {

    this.status = this.loi.status;

  }

}
