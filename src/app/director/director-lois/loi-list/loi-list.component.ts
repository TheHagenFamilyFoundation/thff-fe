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
        var pdf = new jsPDF('p', 'pt', 'letter');
    // var pdf = new jsPDF('p', 'pt', 'a0');
    let promises = [];

    // pdf.setFontSize(40)
    pdf.setFontSize(18)
    pdf.text(100, 10, 'List of Letter of Intents')


    this.lois.forEach(loi => {

      // let loiDoc = '#loi_' + this.lois[0].id;
      // let loiDoc = '#loi1';
      let loiDoc = '#loi_' + loi.id;
      console.log('loiDoc', loiDoc)

      // parentdiv is the html element which has to be converted to PDF
      // html2canvas(document.querySelector(loiDoc)).then(canvas => {

      //   console.log("canvas", canvas)
      //   console.log("canvas.width", canvas.width)
      //   console.log("canvas.height", canvas.height)

      //   // var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      //   var imgData = canvas.toDataURL("image/jpeg", 1.0);
      //   console.log('imgData', imgData)
      // pdf.addImage(imgData, 15, 100, canvas.width, canvas.height);
      //   // pdf.addImage(imgData, 'JPEG', 15, 40, 180, 160)
      //   pdf.save('converteddoc.pdf');

      // });



      promises.push(html2canvas(document.querySelector(loiDoc)))

    });
    // html2canvas(document.querySelector(loiDoc)).then((canvas) => {
    Promise.all(promises).then((canvases) => {

      canvases.forEach((canvas, index) => {

        console.log("canvas", canvas)
        console.log("canvas.width", canvas.width)
        console.log("canvas.height", canvas.height)

        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        console.log("imgData", imgData)
        pdf.addImage(imgData, 15, 100, canvas.width, canvas.height);

        if (index < this.lois.length - 1) {
          //debug
          // if (index < 0) {
          pdf.addPage();
        }

        // pdf.save('converteddoc.pdf');
      });

      pdf.save('converteddoc.pdf');
    })



    // parentdiv is the html element which has to be converted to PDF
    // html2canvas(document.querySelector("#parentdiv")).then(canvas => {

    //   // var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
    //   console.log("canvas", canvas)
    //   console.log("canvas.width", canvas.width)
    //   console.log("canvas.height", canvas.height)

    //   let pageHeight = 0;

    //   console.log('pageHeight', pageHeight)

    //   if (pageHeight > 0) {
    //     pdf.addPage();
    //   }

    // var imgData = canvas.toDataURL("image/jpeg", 1.0);
    // pdf.addImage(imgData, 0, 0, canvas.width, pageHeight);


    // pageHeight += 500;

    // var pageHeight = pdf.internal.pageSize.height;
    // console.log("pageHeight", pageHeight)

    // var doc = new jsPDF();
    // var pageHeight = doc.internal.pageSize.height;
    // console.log('pageHeight', pageHeight)

    // Before adding new content
    // var y = 500 // Height position of new content
    // if (y >= pageHeight) {
    //   doc.addPage();
    //   y = 0 // Restart height position
    // }
    // doc.text(x, y, "value");



  }

}
