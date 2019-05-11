import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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


    this.lois.forEach(loi => {

      let loiDoc = '#loi_' + loi.id;
      console.log('loiDoc', loiDoc)

      promises.push(html2canvas(document.querySelector(loiDoc)))

    });

    Promise.all(promises).then((canvases) => {

      canvases.forEach((canvas, index) => {

        var imgWidth = 208; //default 208
        var pageHeight = 500; //295
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var position = 30;

        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)

        if (index < this.lois.length - 1) {
          pdf.addPage();
        }

      });

      this.Loading = false;

      pdf.save('converteddoc.pdf');
    })

  }

}
