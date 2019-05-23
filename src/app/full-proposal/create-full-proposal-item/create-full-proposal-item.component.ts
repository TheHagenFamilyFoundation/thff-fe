//modal component
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-create-full-proposal-item',
  templateUrl: './create-full-proposal-item.component.html',
  styleUrls: ['./create-full-proposal-item.component.css']
})
export class CreateFullProposalItemComponent implements OnInit {

  canCreateFPItem: boolean;

  catDescription$ = new Subject<string>();
  amountRequestedTHFF$ = new Subject<string>();
  amountRequested$ = new Subject<string>();
  amountPending$ = new Subject<string>();

  catDescription: string; //Category/Description
  amountRequestedTHFF: string;
  amountRequested: string;
  amountPending: string;
  total: string

  catDescriptionLength: string; //Category/Description

  ShowMessage: boolean;

  ValidCategory: boolean;
  ValidAmountTHFF: boolean;
  ValidAmount: boolean; //others
  ValidAmountPending: boolean;

  constructor(public dialogRef: MatDialogRef<CreateFullProposalItemComponent>, ) {

    this.canCreateFPItem = false; //initialize to false
    this.ShowMessage = false; //don't show message at the start

    this.catDescriptionLength = '0'; //default

    this.catDescription$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.catDescriptionLength = term.length.toString();
        this.catDescriptionChange()
      });

    // this.amountRequestedTHFF$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.amountRequestedTHFF = Number(term);
    //     this.amountRequestedTHFFChange()
    //   });

    // this.amountRequested$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.amountRequested = Number(term);
    //     this.amountRequestedChange()
    //   });

    // this.amountPending$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.amountPending = Number(term);
    //     this.amountPendingChange()
    //   });

    this.ValidCategory = false;
    this.ValidAmountTHFF = false;
    this.ValidAmount = true; //others
    this.ValidAmountPending = true;

  }

  ngOnInit() {

    this.total = (0).toString();

  }

  getTotal() {

    let art = 0; //Amount Requsted from thff
    let aro = 0; //Amount Requested from Others
    let arp = 0; //Amount Pending

    if (Number(this.amountRequestedTHFF) >= 0) {
      art = Number(this.amountRequestedTHFF);
    }

    if (Number(this.amountRequested) >= 0) {
      aro = Number(this.amountRequested);
    }

    if (Number(this.amountPending) >= 0) {
      arp = Number(this.amountPending);
    }

    this.total = (art + aro + arp).toString();

  }

  createFPItem() {
    console.log('createFPItem')

    var body = {
      total: this.total,
      categoryDescription: this.catDescription,
      amountRequestedTHFF: this.amountRequestedTHFF,
      amountRequested: (this.amountRequested ? this.amountRequested : 0),
      amountPending: (this.amountPending ? this.amountPending : 0)
    }

    this.dialogRef.close(body);

  }

  catDescriptionChange() {
    console.log("catDescriptionChange");

    if (this.catDescription != '') {

      this.ShowMessage = false;
      this.ValidCategory = true;
    }
    else {
      this.ShowMessage = true;
      this.ValidCategory = false;
    }

    this.verifyInput();

  }

  amountRequestedTHFFChange(event) {
    console.log("amountRequestedTHFFChange");

    if (this.amountRequestedTHFF != '' && Number(this.amountRequestedTHFF) > 0) {

      this.ShowMessage = false;
      this.ValidAmountTHFF = true;
    }
    else {
      this.ShowMessage = true;
      this.ValidAmountTHFF = false;
    }

    this.verifyInput();

  }

  amountRequestedChange(event) {
    console.log("amountRequestedChange");

    if (Number(this.amountRequested) >= 0) {

      this.ShowMessage = false;
      this.ValidAmount = true;
    }
    else {
      this.ShowMessage = true;
      this.ValidAmount = false;
    }

    this.verifyInput();

  }

  amountPendingChange(event) {
    console.log("amountPendingChange");

    if (Number(this.amountPending) >= 0) {

      this.ShowMessage = false;
      this.ValidAmountPending = true;
    }
    else {
      this.ShowMessage = true;
      this.ValidAmountPending = false;
    }

    this.verifyInput();

  }

  verifyInput() {

    this.getTotal();

    if (this.ValidAmount && this.ValidCategory && this.ValidAmountPending && this.ValidAmountTHFF) {
      this.canCreateFPItem = true;
      this.ShowMessage = false;

    }
    else {
      this.canCreateFPItem = false;
      this.ShowMessage = false;

    }

  }


  cancel() {

    console.log('cancel pressed');

  }

}
