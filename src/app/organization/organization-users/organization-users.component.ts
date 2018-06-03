import { Component,ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.css']
})
export class OrganizationUsersComponent implements OnInit {

  @Input()
  org: any;

  users: any;

  // displayedColumns = ['id', 'name', 'progress', 'color'];
  displayedColumns = ['username'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngOnInit() {


    console.log('this.org', this.org)
    console.log('this.org.users', this.org.users)
    this.users = this.org.users;
    this.dataSource = this.users;

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    //this.openSelectedOrgDialog(row); //pass in the org from row object

  }


}
