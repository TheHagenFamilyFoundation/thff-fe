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

  user: any;
  userID: any;

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
  viewOrgLink: string;

  filter: number;
  outputFilter: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public getLoiService: GetLoiService,
    private loiStatus: LOIStatusService,
    public getNextLoiService: GetNextLoiService,
    public getPrevLoiService: GetPrevLoiService,

  ) {

    this.outputFilter = 'All'

    this.route.params.subscribe(params => {
      console.log('params', params);
      this.loiID = params.id;
      this.getLOI(this.loiID);
    });

    this.route.queryParams.subscribe(queryParams => {
      console.log('query params', queryParams);
      this.filter = Number(queryParams.filter);
      this.getFilter(this.filter);
    })

    this.First = false;
    // this.First = true; //debug
    this.Last = false;

    this.user = JSON.parse(localStorage.getItem('currentUser'))
    this.userID = this.user.id;

  }

  ngOnInit() {

    console.log('loiID', this.loiID)
    console.log('filter', this.filter)
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
          this.viewOrgLink = this.dirOrgLink + this.orgID

          console.log('this.viewOrgLink', this.viewOrgLink)

          this.setStatus();

          let nextLOIData = {
            createdAt: this.createdAt,
            filter: this.filter,
            user: this.user
          }
          this.getNextLoiService.getNextLOI(nextLOIData).subscribe(
            (loi) => {
              console.log('next loi', loi)

              if (loi) {
                this.Last = false;

                this.nextLOILink = this.loiLink + loi.loiID;

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

          let prevLOIData = {
            createdAt: this.createdAt,
            filter: this.filter,
            user: this.user
          }

          this.getPrevLoiService.getPrevLOI(prevLOIData).subscribe(
            (loi) => {
              console.log('prev loi', loi)

              if (loi) {
                this.First = false;

                this.prevLOILink = this.loiLink + loi.loiID;

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
    this.router.navigate([this.prevLOILink], { queryParams: { filter: this.filter } });

  }

  routeNext() {
    console.log('routeNext')
    console.log('routing to: ', this.nextLOILink);
    this.router.navigate([this.nextLOILink], { queryParams: { filter: this.filter } });

  }

  routeToOrg() {
    this.router.navigate([this.viewOrgLink]);
  }

  getFilter(filter) {

    console.log('getFilter', filter)
    console.log('before - this.outputFilter', this.outputFilter)

    switch (filter) {
      case 0:
        this.outputFilter = 'All'
        break;
      case 1:
        this.outputFilter = 'President Voted Yes'
        break;
      case 2:
        this.outputFilter = 'President Voted No'
        break;
      case 3:
        this.outputFilter = 'Pending Votes'
        break;
    }

    console.log('after - this.outputFilter', this.outputFilter)

  }


}
