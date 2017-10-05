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
  dataSource = new ExampleDataSource();

  currentYear: number;
  nextYear: number;

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
    //console.log(this.currentYear)

  }

}

export interface Element {
  Step: string;
  Date: string;
}

const today = new Date();
const currentYear = today.getFullYear();

const data: Element[] = [
  {
    Step: `Deadline for Letters of Intent\
    If your organization wishes to apply for funding, you must begin by completing the Letter of Intent.`
    , Date: `Submitted by: April ` + currentYear
  },
  { Step: '', Date: 'Helium' },
  { Step: '', Date: 'Lithium' },
  { Step: '', Date: 'Beryllium' },
  { Step: '', Date: 'Boron' },
  { Step: '', Date: 'Carbon' },
  { Step: '', Date: 'Nitrogen' },
  { Step: '', Date: 'Oxygen' },

];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() { }
}
