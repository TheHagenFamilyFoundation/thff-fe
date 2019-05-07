import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GetLoiService } from '../../services/loi/get-loi.service';
import { LOIStatusService } from '../../services/loi/loi-status.service';
import { DirectorSelectedLoiComponent } from './director-selected-loi/director-selected-loi.component';

@Component({
  selector: 'app-director-lois',
  templateUrl: './director-lois.component.html',
  styleUrls: ['./director-lois.component.css']
})
export class DirectorLoisComponent implements OnInit {

  lois: any;

  user: any;
  userID: any;

  displayedColumns = ['name', 'org', 'createdOn', 'submitted', 'status', 'score'];
  dataSource: MatTableDataSource<LOIData>;

  Loaded: boolean;

  AllLOI: boolean;
  PresYes: boolean;
  PresNo: boolean;
  Pending: boolean;
  Printable: boolean;

  currentFilter: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public getLoiService: GetLoiService,
    public dialog: MatDialog,
    private loiStatusService: LOIStatusService,
  ) {

    this.Loaded = false;
    this.AllLOI = true; //set to all initial
    this.PresYes = false;
    this.PresNo = false;
    this.Pending = false;
    this.Printable = false;

    this.currentFilter = 0; //initialize to 0 - All LOI

  }

  ngOnInit() {

    this.getLOIs();

    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.userID = this.user.id;

  }

  getLOIs() {

    this.setButtons(0);

    this.getLoiService.getAllLOIs()
      .subscribe(
        (lois) => {

          console.log('lois', lois);

          this.lois = lois;

          this.setStatuses();

          this.dataSource = new MatTableDataSource(this.lois);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

          this.Loaded = true;

        })

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    console.log('currentFilter', this.currentFilter)

    this.openSelectedLOIDialog(row); //pass in the org from row object

  }

  openSelectedLOIDialog(loi): void {

    let dialogRef = this.dialog.open(DirectorSelectedLoiComponent, {
      width: '400px',
      data: { name: loi.name, loiID: loi.loiID, currentFilter: this.currentFilter }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      console.log('result', result); //debug

    });
  }

  setStatuses() {

    console.log('setting status')

    this.lois.forEach(loi => {

      console.log('before LOI', loi)

      console.log('status', loi.status)

      loi.status = this.configureStatus(loi.status);

      console.log('after LOI', loi)

    });

  }

  //takes in a status s that is a number
  configureStatus(s: number): string {

    return this.loiStatusService.getStatus(s)

  }

  getPresVoting(vote) {

    if (vote == 1) {
      this.setButtons(1);
    }
    else {
      this.setButtons(2);
    }

    this.Loaded = false;

    this.getLoiService.getPresVotes(vote).subscribe(
      (lois) => {

        console.log('lois', lois)

        this.lois = lois;

        this.setStatuses();

        this.dataSource = new MatTableDataSource(this.lois);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.Loaded = true;

      })
  }

  getPendingVoteLOIs() {

    this.setButtons(3);

    this.Loaded = false;

    let user = this.userID;

    this.getLoiService.getPendingVotes(user).subscribe(
      (lois) => {

        console.log('lois', lois)

        this.lois = lois;

        this.setStatuses();

        this.dataSource = new MatTableDataSource(this.lois);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.Loaded = true;

      })
  }

  getPrintable() {
    console.log('printable')

    this.Printable = true;

  }

  getTable() {
    this.Printable = false;

    this.getLOIs();

  }

  setButtons(numButton) {

    //all to false
    this.AllLOI = false; //set to all initial
    this.PresYes = false;
    this.PresNo = false;
    this.Pending = false;

    switch (numButton) {
      case 0:
        this.AllLOI = true; //set to all initial
        this.currentFilter = 0;
        break;
      case 1:
        this.PresYes = true;
        this.currentFilter = 1;
        break;
      case 2:
        this.PresNo = true;
        this.currentFilter = 2;
        break;
      case 3:
        this.Pending = true;
        this.currentFilter = 3;
        break;
    }

  }

}

//old
export interface LOIData {
  id: string;
  name: string;
  organization: string;
  createdAt: string;
  submitted: string;
  status: string;
  score: number;
}