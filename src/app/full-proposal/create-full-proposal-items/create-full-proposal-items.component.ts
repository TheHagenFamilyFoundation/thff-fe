import { Component, OnInit } from '@angular/core';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CreateFullProposalItemComponent } from '../create-full-proposal-item/create-full-proposal-item.component';

import { CreateFpItemService } from '../../services/full-proposal/create-fp-item.service';

@Component({
  selector: 'app-create-full-proposal-items',
  templateUrl: './create-full-proposal-items.component.html',
  styleUrls: ['./create-full-proposal-items.component.css']
})
export class CreateFullProposalItemsComponent implements OnInit {

  displayedColumns = ['category', 'amount1', 'amount2', 'amount3', 'total'];
  dataSource: any;

  createFPItemHeight: string;
  createFPItemWidth: string;

  fpItems: any;

  // fpItem: any;

  constructor(public dialog: MatDialog,
    private createFpItemService: CreateFpItemService) {

    this.createFPItemHeight = '450';
    this.createFPItemWidth = '700';

  }

  ngOnInit() {

    this.fpItems = [];
    //this.dataSource = this.fpItems;

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

  updateDataSource() {

    console.log('update data source')
    console.log('fpItems.length', this.fpItems.length)

    this.dataSource = null;

    this.dataSource = new MatTableDataSource(this.fpItems);

    console.log('after - update data source')
  }

  getAmountTotal() {

    console.log('getAmountTotal');
    //return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  getAmountTotal1() {

    console.log('getAmountTotal1');
    //return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);

  }

  getAmountTotal2() {

    console.log('getAmountTotal2');
    //return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);

  }

  getAmountTotal3() {

    console.log('getAmountTotal3');
    //return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);

  }

}
