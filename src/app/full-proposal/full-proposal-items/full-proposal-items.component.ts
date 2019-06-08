import { Component, OnInit, Input } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateFullProposalItemComponent } from '../create-full-proposal-item/create-full-proposal-item.component';
import { DeleteFullProposalItemComponent } from '../delete-full-proposal-item/delete-full-proposal-item.component';

// import { CreateFpItemService } from '../../services/full-proposal/create-fp-item.service'; //used in the modal
import { GetFpItemService } from '../../services/full-proposal/get-fp-item.service';
import { RemoveFpItemService } from '../../services/full-proposal/remove-fp-item.service';

@Component({
  selector: 'app-full-proposal-items',
  templateUrl: './full-proposal-items.component.html',
  styleUrls: ['./full-proposal-items.component.css']
})
export class FullProposalItemsComponent implements OnInit {

  displayedColumns = ['category', 'amount1', 'amount2', 'amount3', 'total', 'remove'];
  dataSource: any;

  createFPItemHeight: string;
  createFPItemWidth: string;

  deleteFPItemHeight: string;
  deleteFPItemWidth: string;

  fpItems: any;

  // fpItem: any;

  @Input()
  Editing: boolean;

  @Input()
  FPid: string;

  constructor(public dialog: MatDialog,
    // private createFpItemService: CreateFpItemService,
    private getFpItemService: GetFpItemService,
    private RemoveFpItemService: RemoveFpItemService) {

    this.createFPItemHeight = '450';
    this.createFPItemWidth = '700';

    this.deleteFPItemHeight = '450';
    this.deleteFPItemWidth = '700';

  }

  ngOnInit() {

    this.fpItems = [];
    //this.dataSource = this.fpItems;

    this.getFPItems();

  }

  getFPItems() {

    console.log('getFPItems', this.FPid)

    this.getFpItemService.getFullProposalItemsByFPID(this.FPid).subscribe(
      (items) => {

        console.log('after get fp items', items)

        this.fpItems = items;

        this.updateDataSource();

      },
      (err) => {
        console.log('we have an err', err)
      })

  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);

    //this.openSelectedOrgDialog(row); //pass in the org from row object

  }

  createFullProposalItem() {

    console.log('add full proposal item');

    //modal
    this.openCreateFullProposalItemDialog();

  }

  openCreateFullProposalItemDialog(): void {

    let dialogRef = this.dialog.open(CreateFullProposalItemComponent, {
      //width: '700px',
      width: this.createFPItemWidth + 'px',
      height: this.createFPItemHeight + 'px',
      data: { /*users: this.org.users*/ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug

      console.log('result', result); //debug

      if (result) {
        let fpItem = result;

        //  this.fpItems = [];
        this.fpItems.push(fpItem)

        console.log('this.fpItems', this.fpItems)

        console.log('this.dataSource', this.dataSource)

        this.updateDataSource();

      }

    });

  }

  openDeleteFullProposalItemDialog(fpItem: any): void {

    let dialogRef = this.dialog.open(DeleteFullProposalItemComponent, {
      //width: '700px',
      width: this.createFPItemWidth + 'px',
      height: this.createFPItemHeight + 'px',
      data: { fpItem }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug

      console.log('result', result); //debug

      if (result && result.delete) {

        console.log('deleting'); //debug

        let body = {
          id: fpItem.id
        }

        this.RemoveFpItemService.deleteFPItem(body).subscribe(
          () => {
            this.getFPItems();
          },
          (err) => {
            console.log('err', err)
          })

      }

    });

  }

  updateDataSource() {

    console.log('update data source')
    console.log('fpItems.length', this.fpItems.length)

    this.dataSource = null;

    this.dataSource = new MatTableDataSource(this.fpItems);

    console.log('after - update data source')
  }

  getAmountTotal() {

    console.log('getAmountTotal');

    let totalAmount = 0;

    this.fpItems.forEach(fpItem => {
      // console.log('getAmountTotal - fpItem', fpItem)
      totalAmount += Number(fpItem.total);

    });

    return totalAmount;
  }

  getAmountTotal1() {

    console.log('getAmountTotal1');

    let totalamountRequestedTHFF = 0;

    this.fpItems.forEach(fpItem => {
      // console.log('getAmountTotal1 - fpItem', fpItem)
      totalamountRequestedTHFF += Number(fpItem.amountRequestedTHFF);

    });

    return totalamountRequestedTHFF;

  }

  getAmountTotal2() {

    console.log('getAmountTotal2');

    let totalAmountRequested = 0;

    this.fpItems.forEach(fpItem => {
      // console.log('getAmountTotal2 - fpItem', fpItem)
      totalAmountRequested += Number(fpItem.amountRequested)

    });

    return totalAmountRequested;

  }

  //total
  getAmountTotal3() {

    console.log('getAmountTotal3');

    // amountPending

    let totalAmountPending = 0;

    this.fpItems.forEach(fpItem => {
      // console.log('getAmountTotal3 - fpItem', fpItem)
      totalAmountPending += Number(fpItem.amountPending)

    });

    return totalAmountPending;
  }

  //shows the dialog
  remove(row) {

    console.log('clicked remove', row)

    //modal
    this.openDeleteFullProposalItemDialog(row);

  }

  //shows the dialog
  edit(row) {

    console.log('clicked edit', row)

    //modal
    // this.openEditFullProposalItemDialog(row);

  }

}
