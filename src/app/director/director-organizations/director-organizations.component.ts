import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GetOrganizationService } from '../../services/organization/get-organization.service';
import { DirectorSelectedOrganizationComponent } from './director-selected-organization/director-selected-organization.component';

@Component({
  selector: 'app-director-organizations',
  templateUrl: './director-organizations.component.html',
  styleUrls: ['./director-organizations.component.css']
})
export class DirectorOrganizationsComponent implements OnInit {

  organizations: any;

  displayedColumns = ['name', 'createdOn'];
  dataSource: MatTableDataSource<OrganizationData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public getOrgService: GetOrganizationService, public dialog: MatDialog, ) { }

  ngOnInit() {

    this.getOrganizations();

  }

  getOrganizations() {

    this.getOrgService.getAllOrgs()
      .subscribe(
        (orgs) => {

          console.log('orgs', orgs);

          this.organizations = orgs;

          this.dataSource = new MatTableDataSource(this.organizations);

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

    let dialogRef = this.dialog.open(DirectorSelectedOrganizationComponent, {
      width: '400px',
      data: { name: org.name, orgID: org.organizationID, org: org }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      console.log('result', result); //debug

    });
  }

}

//old
export interface OrganizationData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
