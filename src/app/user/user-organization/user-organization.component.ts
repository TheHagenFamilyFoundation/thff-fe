import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { GetUserService } from '../../services/user/get-user.service';

import { CreateOrganizationComponent } from '../../organization/create-organization/create-organization.component';

@Component({
  selector: 'app-user-organization',
  templateUrl: './user-organization.component.html',
  styleUrls: ['./user-organization.component.css']
})
export class UserOrganizationComponent implements OnInit {

  // displayedColumns = ['id', 'name', 'progress', 'color'];
  displayedColumns = ['name', 'createdOn'];
  dataSource: MatTableDataSource<OrganizationData>;

  InOrganization = false;

  @Input()
  user: any;

  userName: any; //string

  orgName: any;//string
  description: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public getUserService: GetUserService,
    private router: Router,
    public dialog: MatDialog,
  ) {
    // // Create 100 organizations
    // const organizations: OrganizationData[] = [];
    // for (let i = 1; i <= 100; i++) { organizations.push(createNewOrganization(i)); }

    // // Assign the data to the data source for the table to render
    //this.dataSource = new MatTableDataSource(organizations);
  }

  ngOnInit() {
    // this.getUserName();

    this.userName = this.user.username

    this.checkOrganizations();
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  // ngAfterViewInit() {



  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // getUserName() {

  //   if (localStorage.getItem('currentUser')) {
  //     // logged in so return true
  //     this.user = JSON.parse(localStorage.getItem('currentUser'));
  //     this.userName = this.user.username

  //     this.checkOrganizations();

  //   }
  //   else {
  //     //logout
  //     this.router.navigate(['/logout']);
  //   }

  // }//end of getUserName

  //checks if user is in any organizations
  checkOrganizations() {

    console.log('check organizations');

    this.getUserService.getUserbyUsername(this.userName)
      .subscribe(
        (user) => {

          console.log('user', user);

          let organization = user[0].organizations;

          if (organization.length > 0) {
            this.InOrganization = true;
            this.dataSource = new MatTableDataSource(organization);

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

          }
          else {

            //no organizations
            console.log("not in any organizations");

            this.InOrganization = false;

          }

        })
  }//end of checkOrganization

  createOrganization() {

    console.log('create organization');

    //modal
    this.openDialog();

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateOrganizationComponent, {
      width: '250px',
      data: { name: this.orgName, description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug
      this.checkOrganizations();

    });
  }



}//end of component

/** Builds and returns a new Organization. */
function createNewOrganization(id: number): OrganizationData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface OrganizationData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


