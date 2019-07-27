import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { GetUserService } from '../../services/user/get-user.service';
import { GetLoiService } from '../../services/loi/get-loi.service';
import { InOrgService } from "../../services/user/in-org.service";

import { CreateLetterOfIntentComponent } from '../../letter-of-intent/create-letter-of-intent/create-letter-of-intent.component';
import { SelectedLetterOfIntentComponent } from './selected-letter-of-intent/selected-letter-of-intent.component';

@Component({
  selector: 'app-user-letter-of-intent',
  templateUrl: './user-letter-of-intent.component.html',
  styleUrls: ['./user-letter-of-intent.component.css']
})
export class UserLetterOfIntentComponent implements OnInit {

  displayedColumns = ['name', 'organization', 'createdAt'];
  dataSource: MatTableDataSource<LOIData>;

  HasLOIs = false; //has LOIs
  InOrganization = false; //if user is in org

  NotInOrgMessage = 'You must be in an Organization in order to create a LOI.'

  @Input()
  user: any;

  userID: any; //string
  userName: any; //string

  loiName: any;//string - letter of intent name
  description: any;

  inOrgCheck: boolean;

  Loaded: boolean;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    public getUserService: GetUserService,
    public getLoiService: GetLoiService,
    private router: Router,
    public dialog: MatDialog,
    private inOrg: InOrgService
  ) {

    this.Loaded = false;

  }

  ngOnInit() {

    this.inOrg.currentInOrg.subscribe(message => {

      this.inOrgCheck = message;

      console.log('inOrgCheck change', this.inOrgCheck)
      if (this.inOrgCheck) {
        console.log('enable LOI')
        this.InOrganization = true;
      }

    })

    this.userName = this.user.username
    this.userID = this.user.id;

    this.getUser();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getUser() {

    this.getUserService.getUserbyUsername(this.userName)
      .subscribe((user) => {

        //pass in the user to the check functions
        this.checkOrganizations(user);
        this.checkLOIs();

      })
  }

  //checks if user is in any organizations
  checkOrganizations(user) {

    let organization = user[0].organizations;

    if (organization.length > 0) {

      this.InOrganization = true;

      this.checkLOIs();

    }
    else {

      //no organizations
      console.log("not in any organizations");

      this.InOrganization = false;

    }
  }//end of checkOrganization

  //checks if user has any LOIs
  checkLOIs() {

    console.log('check LOIs');

    this.getLoiService.getLOIbyuserID(this.userID)
      .subscribe(
        (loi) => {

          console.log('loi', loi);

          if (loi) {

            if (loi.length > 0) {

              this.HasLOIs = true;
              this.dataSource = new MatTableDataSource(loi);

              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            }
            else {

              //no lois
              console.log("does not have any LOIs");

              this.HasLOIs = false;

            }

          }

          this.Loaded = true;

        })

  }//end of checkLOIs

  getLOIs() {

    this.getLoiService.getLOIbyuserID(this.userID)
      .subscribe(
        (loi) => {

          console.log('loi', loi);

          if (loi) {

            if (loi.length > 0) {

              this.HasLOIs = true;
              this.dataSource = new MatTableDataSource(loi);

              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;

            }
            else {

              //no lois
              console.log("does not have any LOIs");

              this.HasLOIs = false;

            }

          }

        })

  }//end of getLOIs

  // createLOI() {

  //   console.log('create letter of intent');

  //   //modal
  //   this.openCreateLOIDialog();

  // }

  createLOIFull() {

    //route to the full LOI

    this.router.navigate(['/create-loi-full']);

  }

  openCreateLOIDialog(): void {
    let dialogRef = this.dialog.open(CreateLetterOfIntentComponent, {
      width: '300px',
      data: { name: this.loiName, description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug
      //this.checkLOIs(this.user);
      this.getLOIs();
    });
  }

  openSelectedLOIDialog(loi): void {

    console.log('loi.loiID', loi.loiID);

    let dialogRef = this.dialog.open(SelectedLetterOfIntentComponent, {
      width: '400px',
      data: { name: loi.name, loiID: loi.loiID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      console.log('result', result); //debug

    });
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    this.openSelectedLOIDialog(row); //pass in the loi from row object

  }

  newMessage() {
    this.inOrg.changeMessage(false)
  }

}//end of component

//old
/** Builds and returns a new LOI. */
function createNewLOI(id: number): LOIData {
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

//old
/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

//old
export interface LOIData {
  id: string;
  name: string;
  progress: string;
  color: string;
}


