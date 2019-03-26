import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

//services
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
  orgID: string;

  status: number;

  //check basic row height
  basicRowHeight = 350;

  First: boolean;
  Last: boolean;

  loiLink = 'director-loi/'
  link: string;

  dirOrgLink = 'director-organization/'

  nextLOILink: string;
  prevLOILink: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public getLoiService: GetLoiService,
    private loiStatus: LOIStatusService,
    public getNextLoiService: GetNextLoiService,
    public getPrevLoiService: GetPrevLoiService,

  ) {

    this.route.params.subscribe(params => {
      console.log('params', params);
      this.loiID = params.id;
      this.getLOI(this.loiID);
    });

    this.First = false;
    // this.First = true; //debug
    this.Last = false;

  }

  ngOnInit() {

    console.log('loiID', this.loiID)

    // this.getLOI(this.loiID);

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
          this.orgID = this.organization.organizationID;
          this.dirOrgLink += this.orgID

          console.log('this.dirOrgLink', this.dirOrgLink)

          this.setStatus();

          this.getNextLoiService.getNextLOI(this.createdAt).subscribe(
            (loi) => {
              console.log('next loi', loi)

              if (loi.length > 0) {
                this.Last = false;

                this.nextLOILink = this.loiLink + loi[0].loiID;

                console.log('this is the link', this.nextLOILink);

              }
              else {
                this.Last = true;
              }

            },
            err => {
              console.log(err)
            }
          )

          this.getPrevLoiService.getPrevLOI(this.createdAt).subscribe(
            (loi) => {
              console.log('prev loi', loi)

              if (loi.length > 0) {
                this.First = false;

                this.prevLOILink = this.loiLink + loi[0].loiID;

                console.log('this is the link', this.prevLOILink);

              }
              else {
                this.First = true;
              }

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

  routePrevious() {

    console.log('routePrevious')
    console.log('routing to: ', this.prevLOILink);
    this.router.navigate([this.prevLOILink]);

  }

  routeNext() {
    console.log('routeNext')
    console.log('routing to: ', this.nextLOILink);
    this.router.navigate([this.nextLOILink]);

  }

  routeToOrg() {
    this.router.navigate([this.dirOrgLink]);
  }


}
