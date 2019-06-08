import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-full-proposal-item',
  templateUrl: './delete-full-proposal-item.component.html',
  styleUrls: ['./delete-full-proposal-item.component.css']
})
export class DeleteFullProposalItemComponent implements OnInit {

  catDescriptionLength: string;

  catDescription: string; //Category/Description
  amountRequestedTHFF: string;
  amountRequested: string;
  amountPending: string;
  total: string;

  constructor(public dialogRef: MatDialogRef<DeleteFullProposalItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ) {

    console.log('data', data)

    this.catDescriptionLength = '0'; //default

    this.catDescription = data.fpItem.categoryDescription;
    this.catDescriptionLength = data.fpItem.categoryDescription.length;
    this.amountRequestedTHFF = data.fpItem.amountRequestedTHFF;
    this.amountRequested = data.fpItem.amountRequested;
    this.amountPending = data.fpItem.amountPending;
    this.total = data.fpItem.total;

  }

  ngOnInit() {
  }

  deleteFPItem() {
    console.log('deleteFPItem')

    console.log('catDescription', this.catDescription)

    var body = {
      delete: true
    }

    this.dialogRef.close(body);

  }

  cancel() {

    console.log('cancel pressed');

  }

}
