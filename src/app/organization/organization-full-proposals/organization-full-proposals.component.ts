import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GetFullProposalService } from '../../services/full-proposal/get-full-proposal.service';
import { FpStatusService } from '../../services/full-proposal/fp-status.service';

import { OrgSelectedFullProposalComponent } from '../org-selected-full-proposal/org-selected-full-proposal.component'

@Component({
  selector: 'app-organization-full-proposals',
  templateUrl: './organization-full-proposals.component.html',
  styleUrls: ['./organization-full-proposals.component.css']
})
export class OrganizationFullProposalsComponent implements OnInit {

  @Input()
  org: any;

  orgID: any;

  fps: any;

  //mongodb id
  organizationID: any;

  displayedColumns = ['loiname', 'createdAt', 'updatedAt', 'submitted', 'status'];
  dataSource: any;//MatTableDataSource<OrganizationData>;

  HasFPs: boolean;

  NoFPs = 'No Full Proposals'

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private getFullProposalService: GetFullProposalService, private fpStatusService: FpStatusService, ) {

    this.HasFPs = false;

    console.log('1 - this.paginator', this.paginator)

  }

  ngOnInit() {

    console.log('this.org', this.org)

    //input org - get the id
    this.orgID = this.org.organizationID;
    this.organizationID = this.org.id;

    console.log('orgID', this.orgID)

    console.log('2 - this.paginator', this.paginator)

    this.getFPs();

  }

  //get full proposals
  getFPs() {

    console.log('get FPS', this.organizationID)

    this.getFullProposalService.getFullProposalsByOrgID(this.organizationID)
      .subscribe(
        (resultfps) => {

          this.fps = resultfps;

          console.log('this.fps', this.fps);

          if (this.fps && this.fps.length > 0) {

            this.HasFPs = true;

            this.fps.forEach((fp) => {

              fp.loiname = fp.loi.name;

            })

            console.log('before datasource fps', this.fps)

            this.setStatuses();

            this.dataSource = new MatTableDataSource(this.fps);

            console.log('this.paginator', this.paginator)
            console.log('this.dataSource', this.dataSource)

            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;

          }
          else {

            //no lois
            console.log("does not have any FPs");

            this.HasFPs = false;

          }

        })

  }//end of getLOIs

  setStatuses() {

    console.log('setting status')

    this.fps.forEach(fp => {

      console.log('before FP', fp)

      console.log('status', fp.status)

      fp.status = this.configureStatus(fp.status);

      console.log('after FP', fp)

    });

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    this.openRouteFPDialog(row);

  }

  //takes in a status s that is a number
  configureStatus(s: number): string {

    return this.fpStatusService.getStatus(s)

  }

  openRouteFPDialog(fp): void {
    let dialogRef = this.dialog.open(OrgSelectedFullProposalComponent, {
      width: '250px',
      data: { name: fp.loiname, fpID: fp.fpID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug
    });
  }

}
