import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-of-intent-submit',
  templateUrl: './letter-of-intent-submit.component.html',
  styleUrls: ['./letter-of-intent-submit.component.css']
})
export class LetterOfIntentSubmitComponent implements OnInit {

  @Input()
  loi: any;

  constructor() { }

  ngOnInit() {
  }

}
