import { Component, ViewChild, OnInit, Input } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//services
import { GetLoiService } from '../../../../services/loi/get-loi.service';
import { LOIStatusService } from '../../../../services/loi/loi-status.service';

//components
import { OrgSelectedLetterOfIntentComponent } from '../../../../organization/org-selected-letter-of-intent/org-selected-letter-of-intent.component';

@Component({
  selector: 'app-director-view-organization-lois',
  templateUrl: './director-view-organization-lois.component.html',
  styleUrls: ['./director-view-organization-lois.component.css']
})
export class DirectorViewOrganizationLoisComponent implements OnInit {

  lois: any;

  @Input()
  org: any;

  orgID: any;

  orgInfo: any;

  HasLOIs = false;

  NoLOIs = 'No LOIs'

  displayedColumns = ['name', 'createdAt', 'submitted', 'status'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public getLoiService: GetLoiService,
    private loiStatusService: LOIStatusService
  ) { }

  ngOnInit() {

    console.log('this.org', this.org)

    this.orgID = this.org.id;

    this.lois = this.org.lois;

    this.setStatuses();

    console.log('this.lois', this.lois)

    if (this.lois.length > 0) {

      this.HasLOIs = true;
    }
    else {
      this.HasLOIs = false;
    }

    this.dataSource = this.lois;

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    this.openSubmitLOIDialog(row);

  }

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

}
