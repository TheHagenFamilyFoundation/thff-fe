import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GetLoiService } from '../services/loi/get-loi.service';

@Component({
  selector: 'app-letter-of-intent',
  templateUrl: './letter-of-intent.component.html',
  styleUrls: ['./letter-of-intent.component.css']
})
export class LetterOfIntentComponent implements OnInit {

  loiID: any;

  loi: any; //the loi object

  //check basic row height
  basicRowHeight = 400;

  constructor(
    private route: ActivatedRoute,
    public getLoiService: GetLoiService,
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.loiID = params.id;
    });
  }

  ngOnInit() {

    console.log('loiID', this.loiID)

    this.getLOI(this.loiID);


  }

  getLOI(loiID) {

    console.log('check loi');

    //query database for that loi

    this.getLoiService.getLOIbyID(loiID)
      .subscribe(
        (loi) => {

          console.log('loi', loi);

          this.loi = loi[0];

        })

  }

  onVoted(agreed: boolean) {
    console.log("agreed")

    this.getLOI(this.loiID);


  }

}
