import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.css']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {

  title = "THFF FAQ"
  subTitle = "(Frequently Asked Questions)"

  constructor() { }

  ngOnInit() {
  }

}
