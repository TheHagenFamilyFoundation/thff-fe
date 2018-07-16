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

  // message: string;

  status: any;

  constructor(private loiStatus: LOIStatusService) {

  }

  ngOnInit() {

    console.log('loi', this.loi)

    //set status
    this.setStatus();

    this.loiStatus.currentStatus.subscribe(status => this.status = status)

  }

  setStatus() {

    this.status = this.loi.status;

  }

  //check if org has 501c3
  //check if org has org info as well


  newMessage() {
    this.loiStatus.changeStatus("Hello from Sibling")
  }

}
