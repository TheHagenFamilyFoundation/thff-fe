import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-organization-header',
  templateUrl: './create-organization-header.component.html',
  styleUrls: ['./create-organization-header.component.css']
})
export class CreateOrganizationHeaderComponent implements OnInit {

  orgName$ = new Subject<string>();
  //description$ = new Subject<string>();

  orgName: any; //string
  //description: any; //string

  message: any; //string

  ShowMessage = false;

  CanCreateOrg = false;

  constructor(private router: Router,
    public dialogRef: MatDialogRef<CreateOrganizationHeaderComponent>
  ) {

    this.orgName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.orgName = term;
        this.orgNameChange()
      });

    // this.description$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.description = term;
    //     this.descriptionChange()
    //   });

  }

  ngOnInit() {
  }

  createOrg() {

    console.log('create Org');

    //route to the create organization full
    //pass in the orgname and the description
    //pull the user

    this.dialogRef.close();

    this.router.navigate(['/create-organization', this.orgName]);

  }//end of createOrg

  orgNameChange() {

    console.log('organization name change');

    if (this.orgName != "") {

      this.CanCreateOrg = true;
    }

  }

  //description is not required
  // descriptionChange() {

  //   console.log('description change')

  // }

  cancel() {

    console.log('cancel pressed');

  }

}
