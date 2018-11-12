import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-full-proposal',
  templateUrl: './create-full-proposal.component.html',
  styleUrls: ['./create-full-proposal.component.css']
})
export class CreateFullProposalComponent implements OnInit {

  API_URL: string;

  fpName$ = new Subject<string>();
  description$ = new Subject<string>();

  fpName: any; //string <-- input from the clicking on create full proposal
  description: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string

  org: any;
  orgName: any;
  orgID: any; //string

  loi: any;
  loiName: any;
  loiID: any;

  CreateShort = false;;

  ShowMessage = false;

  CanCreateFP = false;

  ValidFPName = false;
  ValidOrgName = false;

  message: string;

  constructor(private http: HttpClient,
    public authService: AuthService, public dialogRef: MatDialogRef<CreateFullProposalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

    console.log('data', data)

    //get orgname
    //get org
    //get orgID
    if (data.org.name) {
      this.orgID = data.org.organizationID;
      this.org = data.org;
      this.orgName = data.org.name;

      //if an loi short was used to create
      this.ValidOrgName = true;
    }

    //get Letter of intent name
    //get loiID
    //get loi
    if (data.loi.name) {
      this.loiID = data.loi.loiID;
      this.loi = data.loi;
      this.loiName = data.loi.name;
    }

    this.fpName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.fpName = term;
        this.fpNameChange()
      });

    this.description$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.description = term;
        this.descriptionChange()
      });


  }

  ngOnInit() {
  }

  createFPFull() {

    //route to the full Full proposal create

    this.router.navigate(['/create-fp-full/', this.orgID, this.loiID]);

  }

  createFPShort() {

    this.CreateShort = true;

  }

  cancel() {

    console.log('cancel pressed');

  }

  createFP() {

    console.log('create FP')

    // var body = {
    //   name: this.loiName,
    //   description: this.description,
    //   username: this.userName,
    //   userid: this.userId,//userid of user who created the loi
    //   //need to add org
    //   org: this.org
    // }

    //this.dialogRef.close(body);

    // console.log('body', body)

    // //call the service
    // this.createLoiService.createLOI(body)
    //   .subscribe(
    //     () => { 'loi Created' },
    //     err => console.log(err)
    //   );

  }//end of createLOI


  fpNameChange() {

    console.log('full proposal name change');

    if (this.fpName != "") {

      this.ValidFPName = true;
    }
    else {
      this.ValidFPName = false;
    }

    this.verifyInput();

  }

  //description is not required
  descriptionChange() {

    console.log('description change')

  }

  verifyInput() {

    if (this.ValidFPName && this.ValidOrgName) {
      this.CanCreateFP = true;
    }
    else {
      this.CanCreateFP = false;
    }

  }


}
