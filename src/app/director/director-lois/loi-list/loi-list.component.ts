import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';

@Component({
  selector: 'app-loi-list',
  templateUrl: './loi-list.component.html',
  styleUrls: ['./loi-list.component.css']
})
export class LoiListComponent implements OnInit {

  @Input()
  lois: any;

  Loading: boolean;

  fullImagePath = '/assets/images/pdf.png';

  constructor(
  ) {
    // this.Loading = false;
  }

  ngOnInit() {
  }

  exportToPDF() {
    console.log('export to pdf pressed')

    this.Loading = true;

    var pdf = new jsPDF('p', 'mm', 'a4');
    let promises = [];

    //this is the title
    // pdf.setFontSize(40) //maybe
    pdf.setFontSize(12)
    pdf.text(75, 10, 'List of Letter of Intents')

    console.log('this.lois.length', this.lois.length)
    for (let i = 0; i < this.lois.length; i++) {
      // this.lois.forEach(loi => {

      // let loiDoc = '#loi_' + this.lois[i].id;
      let loiDoc = this.lois[i].id;
      console.log('loiDoc', loiDoc)
      console.log('this.lois[i]', this.lois[i])

      let shift = 0;
      let vertical = 10;
      if (i == 0) {
        //first loi, shift everything down
        shift += 10;
      }

      //Output
      pdf.text(75, vertical + shift, `LOI - ${i + 1} - ${loiDoc}`) //id
      vertical += 10;
      pdf.text(75, vertical + shift, `LOI Name - ${this.lois[i].name}`) //id
      vertical += 10;

      //LOI Info
      if (this.lois[i].info && this.lois[i].info.length > 0) {
        pdf.text(75, vertical + shift, `Project Title - ${this.lois[i].info[0].projectTitle}`) //projectTitle

        /* Purpose */
        vertical += 10;
        pdf.text(15, vertical + shift, `Purpose`) //purpose
        var splitTitle = pdf.splitTextToSize(this.lois[i].info[0].purpose, 150);
        pdf.text(35, vertical + shift, splitTitle);

        vertical += 150;
        pdf.text(75, vertical + shift, `Project Start Date - ${this.lois[i].info[0].projectStartDate}`) //start date
        vertical += 10;
        pdf.text(75, vertical + shift, `Project End Date - ${this.lois[i].info[0].projectEndDate}`) //end date
        vertical += 10;
        pdf.text(75, vertical + shift, `Amount Requested - $${this.lois[i].info[0].amountRequested}`) //amount requested
        vertical += 10;
        pdf.text(75, vertical + shift, `Total Project Cost - $${this.lois[i].info[0].totalProjectCost}`) //total project cost
      }
      else {
        //output no info
        pdf.text(75, vertical + shift, `No Info`) //no info
      }



      if (i < this.lois.length - 1) {
        pdf.addPage();
      }
      // });
    }

    this.Loading = false;

    pdf.save('converteddoc.pdf');
  }



}