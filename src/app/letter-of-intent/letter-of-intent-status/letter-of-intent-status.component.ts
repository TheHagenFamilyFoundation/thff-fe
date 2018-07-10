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

  constructor() {

    this.status = this.loi.status;

  }

  ngOnInit() {
  }

}
