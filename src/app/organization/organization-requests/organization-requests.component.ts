import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-organization-requests',
  templateUrl: './organization-requests.component.html',
  styleUrls: ['./organization-requests.component.css']
})
export class OrganizationRequestsComponent implements OnInit {

  @Input()
  org: any;

  lois: any;

  HasLOIs = false;

  NoLOIs = 'No LOIs'

  // displayedColumns = ['id', 'name', 'progress', 'color'];
  displayedColumns = ['name'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {

    console.log('this.org', this.org)
    console.log('this.org.users', this.org.users)
    this.lois = this.org.lois;
    this.dataSource = this.lois;

    if (this.lois.length > 0) {

      this.HasLOIs = true;
    }
    else
    {
      this.HasLOIs = false;
    }

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    //this.openSelectedOrgDialog(row); //pass in the org from row object

  }

}
