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
  outputStatus: string;

  constructor(private loiStatus: LOIStatusService) {

  }

  ngOnInit() {

    console.log('loi', this.loi)

    this.status = this.loi.status;

    //set status
    this.setStatus(this.status);

    this.loiStatus.currentStatus.subscribe(status => this.status = Number(status))

  }

  setStatus(s: number) {

    this.outputStatus = this.configureStatus(s);

  }

  //takes in a status s that is a number
  configureStatus(s: number): string {

    return this.loiStatus.getStatus(s)

  }


}
