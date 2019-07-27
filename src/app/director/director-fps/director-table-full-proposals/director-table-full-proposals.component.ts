import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';//for table

import { MatDialog } from '@angular/material';

import { DirectorSelectedFPComponent } from './director-selected-fp/director-selected-fp.component';

@Component({
  selector: 'app-director-table-full-proposals',
  templateUrl: './director-table-full-proposals.component.html',
  styleUrls: ['./director-table-full-proposals.component.css']
})
export class DirectorTableFullProposalsComponent implements OnInit {

  Printable: boolean;

  @Input()
  fps: any

  //name is from loi
  displayedColumns = ['name', 'org', 'createdOn', 'submitted', 'status'];
  // dataSource: MatTableDataSource<LOIData>;
  dataSource: any; //used for the table

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, ) {

    this.Printable = false;

  }

  ngOnInit() {

    console.log('setting the dataSource', this.fps)

    // this.dataSource = this.fps;

    // console.log('dataSource set', this.dataSource)
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // // this.dataSource.paginator = this.paginator;
    // setTimeout(() => this.dataSource.sort = this.sort);
    // this.dataSource.sort = this.sort;

    this.setData();

  }

  setData() {

    console.log('setting data')

    this.dataSource = new MatTableDataSource(this.fps);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    this.openSelectedFPDialog(row); // pass in the fp

  }

  //takes in the full proposal
  openSelectedFPDialog(fp): void {

    let dialogRef = this.dialog.open(DirectorSelectedFPComponent, {
      width: '400px',
      data: { fp: fp, fpID: fp.fpID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      console.log('result', result); //debug

    });
  }


}
