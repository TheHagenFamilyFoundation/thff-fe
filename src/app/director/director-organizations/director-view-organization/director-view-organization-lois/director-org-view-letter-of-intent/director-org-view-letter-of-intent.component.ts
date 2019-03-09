import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GetLoiService } from '../../../../../services/loi/get-loi.service';
import { LOIStatusService } from "../../../../../services/loi/loi-status.service";
import { GetNextLoiService } from '../../../../../services/loi/get-next-loi.service';
import { GetPrevLoiService } from '../../../../../services/loi/get-prev-loi.service';

@Component({
  selector: 'app-director-org-view-letter-of-intent',
  templateUrl: './director-org-view-letter-of-intent.component.html',
  styleUrls: ['./director-org-view-letter-of-intent.component.css']
})
export class DirectorOrgViewLetterOfIntentComponent implements OnInit {

  loiID: any;

  loi: any; //the loi object
  createdAt: any;

  organization: any; //organization object retrieved from the loi object
  orgName: string;

  status: number;

  //check basic row height
  basicRowHeight = 350;

  First: boolean;

  Last: boolean;

  constructor(
    private route: ActivatedRoute,
    public getLoiService: GetLoiService,
    private loiStatus: LOIStatusService,
    public getNextLoiService: GetNextLoiService,
    public getPrevLoiService: GetPrevLoiService,

  ) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.loiID = params.id;
    });

    this.First = false;
    this.First = true;
    this.Last = false;

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
          this.createdAt = this.loi.createdAt;

          this.organization = loi[0].organization;

          console.log('organization', this.organization);

          this.orgName = this.organization.name;

          this.setStatus();

          this.getNextLoiService.getNextLOI(this.createdAt).subscribe(
            (loi) => {
              console.log('next loi', loi)

            },
            err => {
              console.log(err)
            }
          )

          this.getPrevLoiService.getPrevLOI(this.createdAt).subscribe(
            (loi) => {
              console.log('prev loi', loi)

            },
            err => {
              console.log(err)
            }
          )

        },
        err => {
          console.log(err)
        }

      )

  }

  setStatus() {

    this.status = this.loi.status;

  }

}
