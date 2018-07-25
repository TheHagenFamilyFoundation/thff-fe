import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GetLoiService } from '../../services/loi/get-loi.service';
//import { DirectorSelectedLOIComponent } from './director-selected-loi/director-selected-loi.component';

@Component({
  selector: 'app-director-lois',
  templateUrl: './director-lois.component.html',
  styleUrls: ['./director-lois.component.css']
})
export class DirectorLoisComponent implements OnInit {

  lois: any;

  displayedColumns = ['name', 'org', 'createdOn'];
  dataSource: MatTableDataSource<LOIData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public getLoiService: GetLoiService, public dialog: MatDialog, ) { }

  ngOnInit() {

    this.getLOIs();

  }

  getLOIs() {

    this.getLoiService.getAllLOIs()
      .subscribe(
        (lois) => {

          console.log('lois', lois);

          this.lois = lois;

          console.log('lois[0].organization.name', lois[0].organization.name)

          this.dataSource = new MatTableDataSource(this.lois);

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        })

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    this.openSelectedOrgDialog(row); //pass in the org from row object

  }

  openSelectedOrgDialog(org): void {

    console.log('org.organizationID', org.organizationID);

    // let dialogRef = this.dialog.open(DirectorSelectedLOIComponent, {
    //   width: '400px',
    //   data: { name: loi.name }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed'); //debug
    //   console.log('result', result); //debug

    // });
  }

}

//old
export interface LOIData {
  id: string;
  name: string;
}

