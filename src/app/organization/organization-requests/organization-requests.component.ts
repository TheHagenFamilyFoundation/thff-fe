import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CreateLetterOfIntentComponent } from '../../letter-of-intent/create-letter-of-intent/create-letter-of-intent.component';
import { OrgSelectedLetterOfIntentComponent } from '../../organization/org-selected-letter-of-intent/org-selected-letter-of-intent.component';

import { GetLoiService } from '../../services/loi/get-loi.service';

@Component({
  selector: 'app-organization-requests',
  templateUrl: './organization-requests.component.html',
  styleUrls: ['./organization-requests.component.css']
})
export class OrganizationRequestsComponent implements OnInit {

  @Input()
  org: any;

  orgName: any;
  orgID: any;

  lois: any;

  HasLOIs = false;

  NoLOIs = 'No LOIs'

  loiName: any;//string - letter of intent name
  description: any;

  // displayedColumns = ['id', 'name', 'progress', 'color'];
  displayedColumns = ['name', 'createdAt', 'submitted'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog, public getLoiService: GetLoiService) { }

  ngOnInit() {

    console.log('this.org', this.org)
    console.log('this.org.users', this.org.users)
    this.lois = this.org.lois;
    this.dataSource = this.lois;
    this.orgID = this.org.organizationID;
    this.orgName = this.org.name;

    if (this.lois.length > 0) {

      this.HasLOIs = true;
    }
    else {
      this.HasLOIs = false;
    }

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    this.openSubmitLOIDialog(row);

  }

  createLOI() {

    console.log('create letter of intent');

    //modal
    this.openCreateLOIDialog();

  }

  openCreateLOIDialog(): void {
    let dialogRef = this.dialog.open(CreateLetterOfIntentComponent, {
      width: '250px',
      data: { orgId: this.orgID, orgName: this.orgName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug
      //this.checkLOIs(this.user);
      this.getLOIs();
    });
  }

  getLOIs() {

    this.getLoiService.getLOIbyorgID(this.orgID)
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

  // submitLOI(row) {

  //   console.log('Submit LOI', row)

  //   this.openSubmitLOIDialog();

  // }

  openSubmitLOIDialog(loi): void {
    let dialogRef = this.dialog.open(OrgSelectedLetterOfIntentComponent, {
      width: '250px',
      data: { name: loi.name, loiID: loi.loiID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug
    });
  }


}
