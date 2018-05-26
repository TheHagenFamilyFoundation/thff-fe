import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { environment } from '../../../environments/environment';

//Services
import { CreateLoiService } from '../../services/loi/create-loi.service';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-letter-of-intent',
  templateUrl: './create-letter-of-intent.component.html',
  styleUrls: ['./create-letter-of-intent.component.css']
})

export class CreateLetterOfIntentComponent implements OnInit {

  API_URL = environment.API_URL;

  loiName$ = new Subject<string>();
  description$ = new Subject<string>();

  loiName: any; //string
  description: any; //string

  message: any; //string

  user: any; //object
  userId: any; //string
  userName: any; //string

  ShowMessage = false;

  CanCreateLOI = false;

  constructor(
    private http: HttpClient,
    private createLoiService: CreateLoiService,
    public dialogRef: MatDialogRef<CreateLetterOfIntentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.loiName$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.loiName = term;
        this.loiNameChange()
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

    this.getUserName();

  }

  createLOI() {

    var body = {
      name: this.loiName,
      description: this.description,
      username: this.userName,
      userid: this.userId,//userid of user who created the organization
    }

    this.dialogRef.close(body);

    //call the service
    this.createLoiService.createLOI(body)
      .subscribe(
        () => { 'Org Created' },
        err => console.log(err)
      );

  }//end of createOrg

  cancel() {

    console.log('cancel pressed');

  }

  loiNameChange() {

    console.log('loi name change');

    if (this.loiName != "") {

      this.CanCreateLOI = true;
    }

  }

  //description is not required
  descriptionChange() {

    console.log('description change')

  }

  getUserName() {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.userName = this.user.username
      this.userId = this.user.id;
    }

  }//end of getUserName


}
