import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-application-timeline',
  templateUrl: './application-timeline.component.html',
  styleUrls: ['./application-timeline.component.css']
})
export class ApplicationTimelineComponent {

  displayedColumns = ['Step', 'Date'];

  currentYear: number;
  nextYear: number;
  previousYear: number;

  cycleDate: any;// = "2017-09-30";// = new Date();
  dd: any;
  mm: any;
  today: any;
  yyyy: any;

  constructor() {

    this.today = new Date();
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth() + 1; //January is 0!
    this.yyyy = this.today.getFullYear();

    if (this.dd < 10) {
      this.dd = '0' + this.dd
    }

    if (this.mm < 10) {
      this.mm = '0' + this.mm
    }

    this.today = this.mm + '/' + this.dd + '/' + this.yyyy;
    this.cycleDate = this.today;

    //this.cycleDate = '2017-09-30';
    //this.cycleDate = new Date();
    //this.currentYear = 2017;
    this.currentYear = this.yyyy;
    //this.nextYear = 2018;
    this.nextYear = this.yyyy + 1;
    this.previousYear = this.yyyy - 1;
    //console.log(this.currentYear)

  }

}


