import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddUsersComponent } from './add-users/add-users.component';

import { AddUserService } from '../../services/organization/add-user.service';

@Component({
  selector: 'app-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.css']
})
export class OrganizationUsersComponent implements OnInit {

  @Input()
  org: any;

  orgID: any;

  users: any;

  addUsersHeight: string;
  addUsersWidth: string;

  selectedUsers: any;

  // displayedColumns = ['id', 'name', 'progress', 'color'];
  displayedColumns = ['username'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private addUserService: AddUserService) {

    this.addUsersHeight = '550';
    this.addUsersWidth = '700';

    this.selectedUsers = [];

  }

  ngOnInit() {

    console.log('this.org', this.org)
    console.log('this.org.users', this.org.users)
    this.users = this.org.users;
    this.dataSource = new MatTableDataSource(this.users);

    this.orgID = this.org.id;

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

      console.log('result', result); //debug

      if (result) {
        this.selectedUsers = result;

        var body = {
          users: this.selectedUsers,
          org: this.org
        }

        //call service to add users to organization
        this.addUserService.addUser(body)
          .subscribe((users) => {

            console.log('users', users)

            this.getUsers();
          })
      }

    });
    
  }

  getUsers() {
    //pulls list of users that organization has
    console.log('getting users')


  }

}
