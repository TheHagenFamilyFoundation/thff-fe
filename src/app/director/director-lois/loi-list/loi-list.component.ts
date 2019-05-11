import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
// import { LOIStatusService } from '../../../services/loi/loi-status.service';


// import { GetLoiService } from '../../../services/loi/get-loi.service';
// import { LOIStatusService } from '../../../services/loi/loi-status.service';

@Component({
  selector: 'app-loi-list',
  templateUrl: './loi-list.component.html',
  styleUrls: ['./loi-list.component.css']
})
export class LoiListComponent implements OnInit {

  @Input()
  lois: any;

  // lois: any

  Loaded: boolean;

  fullImagePath = '/assets/images/pdf.png';

  constructor(
    // public getLoiService: GetLoiService,
    // private loiStatusService: LOIStatusService
  ) {
    this.Loaded = false;
  }

  ngOnInit() {

    // this.getLOIs();

  }

  exportToPDF() {
    console.log('export to pdf pressed')

    // var pdf = new jsPDF();
    var pdf = new jsPDF('p', 'mm', 'a4');
    // var pdf = new jsPDF('p', 'pt', 'a0');
    let promises = [];


    //this is the title
    // pdf.setFontSize(40)
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

      pdf.save('converteddoc.pdf');
    })

  }

}
