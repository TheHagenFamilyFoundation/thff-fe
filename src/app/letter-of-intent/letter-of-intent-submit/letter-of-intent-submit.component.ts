import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-letter-of-intent-submit',
  templateUrl: './letter-of-intent-submit.component.html',
  styleUrls: ['./letter-of-intent-submit.component.css']
})
export class LetterOfIntentSubmitComponent implements OnInit {

  @Input()
  loi: any;

  LOISubmitted: boolean;

  constructor() { }

  ngOnInit() {

    //this.checkIfSubmit();

    this.LOISubmitted = this.loi.submitted;

  }

  // checkIfSubmit() {

  //   //check if letter of intent is submitted
  //   console.log('checking if loi has been submitted')

  //   console.log('loi', this.loi);


  // }

}
