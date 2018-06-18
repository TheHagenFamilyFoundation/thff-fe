import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddUsersComponent } from './add-users/add-users.component';

@Component({
  selector: 'app-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.css']
})
export class OrganizationUsersComponent implements OnInit {

  @Input()
  org: any;

  users: any;

  addUsersHeight: string;
  addUsersWidth: string;

  // displayedColumns = ['id', 'name', 'progress', 'color'];
  displayedColumns = ['username'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, ) {

    this.addUsersHeight = '550';
    this.addUsersWidth = '1000';

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

  addUser() {

    console.log('add Users');

    //modal
    this.openAddUsersDialog();

  }

  openAddUsersDialog(): void {

    console.log('this.addUsersWidth', this.addUsersWidth)

    let dialogRef = this.dialog.open(AddUsersComponent, {
      //width: '700px',
      width: this.addUsersWidth + 'px',
      height: this.addUsersHeight + 'px',
      data: { users: this.org.users }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug

      console.log('result', result); //debug4k monit

      this.getUsers();
    });
  }

  getUsers() {
    //pulls list of users that organization has



  }

}
