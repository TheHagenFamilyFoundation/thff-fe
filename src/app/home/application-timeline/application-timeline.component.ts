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

  cycleDate: any;// = "2017-09-30";// = new Date();

  constructor() {

    this.cycleDate = '2017-09-30';

  }

}

export interface Element {
  Step: string;
  Date: string;
}

const data: Element[] = [
  { Step: '', Date: 'Hydrogen' },
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
