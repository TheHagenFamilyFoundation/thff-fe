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

  displayedColumns = ['name', 'org', 'createdOn', 'submitted', 'status'];
  dataSource: MatTableDataSource<LOIData>;

  Loaded: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public getLoiService: GetLoiService,
    public dialog: MatDialog,
    private loiStatusService: LOIStatusService,
  ) {

    this.Loaded = false;

  }

  ngOnInit() {

    this.getLOIs();

    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.userID = this.user.id;

  }

  getLOIs() {

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

    this.openSelectedLOIDialog(row); //pass in the org from row object

  }

  openSelectedLOIDialog(loi): void {

    let dialogRef = this.dialog.open(DirectorSelectedLoiComponent, {
      width: '400px',
      data: { name: loi.name, loiID: loi.loiID }
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

}

//old
export interface LOIData {
  id: string;
  name: string;
}