import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GetUserService } from '../../../services/user/get-user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  orgUsers: any;
  users: any;
  usersToBeAdded: any;

  selectedUsers: any;

  displayedColumns = ['username'];
  dataSourceAllUsers: any;//MatTableDataSource<OrganizationData>;
  dataSourceSelectedUsers: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getUserService: GetUserService,
    public dialogRef: MatDialogRef<AddUsersComponent>
  ) {

    this.users = [];
    this.selectedUsers = [];

  }

  ngOnInit() {

    console.log('window size', window.innerWidth)

    console.log('addusers: data', this.data)

    this.orgUsers = this.data.users;

    console.log('addusers: orgUsers', this.orgUsers)

    this.getUsers();

  }

  getUsers() {

    console.log('getting users')

    this.getUserService.getAllUsers()
      .subscribe(
        (users) => {

          console.log('users', users);

          users.forEach(element => {

            this.orgUsers.forEach(inside => {

              if (element.id != inside.id) {
                this.users.push(element)
              }

            });

          });

          console.log('this.users', this.users);
          this.dataSourceAllUsers = new MatTableDataSource(this.users);

        })

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
    console.log('user id', row.id)

    console.log('all users', this.dataSourceAllUsers)


    this.dataSourceAllUsers.data.forEach((element, index) => {

      console.log('user', element)

      if (element.id == row.id) {
        console.log('we have user', index);

        //this.users. 
        this.dataSourceAllUsers.data.splice(index, 1);

        console.log('we have user', this.dataSourceAllUsers.data);
        this.dataSourceAllUsers = new MatTableDataSource(this.dataSourceAllUsers.data);

        this.selectedUsers.push(element);
        this.dataSourceSelectedUsers = new MatTableDataSource(this.selectedUsers);

      }

    });

  }

  updateSize() {
    this.dialogRef.updateSize("1000px", "200px");
  }

  addUsers() {

    console.log('adding users')

    this.dialogRef.close();

  }

  applyFilter(filterValue: string) {

    console.log('applying filter');

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSourceAllUsers.filter = filterValue;
  }


}
