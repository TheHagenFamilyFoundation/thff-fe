import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

//services
import { CreateFullProposalService } from '../../services/full-proposal/create-full-proposal.service';
import { CreateFpItemService } from '../../services/full-proposal/create-fp-item.service';

import { GetLoiService } from '../../services/loi/get-loi.service';

//components
import { CreateFullProposalItemsComponent } from '../create-full-proposal-items/create-full-proposal-items.component';

@Component({
  selector: 'app-create-full-proposal-full',
  templateUrl: './create-full-proposal-full.component.html',
  styleUrls: ['./create-full-proposal-full.component.css']
})
export class CreateFullProposalFullComponent implements OnInit {

  loi: any;
  loiID: any;

  org: any;
  orgID: any;

  fpID: any;

  executiveSummary$ = new Subject<string>();
  targetPopulation$ = new Subject<string>();
  goals$ = new Subject<string>();
  timeTable$ = new Subject<string>();
  partners$ = new Subject<string>();
  differ$ = new Subject<string>();
  involve$ = new Subject<string>();
  staff$ = new Subject<string>();
  strategy$ = new Subject<string>();
  evaluation$ = new Subject<string>();
  dissemination$ = new Subject<string>();
  active$ = new Subject<string>();
  priority$ = new Subject<string>();
  history$ = new Subject<string>();
  website$ = new Subject<string>();

  executiveSummary: string;
  targetPopulation: string;
  goals: string;
  activity: number;
  timeTable: string;
  partners: string;
  differ: string;
  involve: string;
  staff: string;
  strategy: string;
  evaluation: string;
  dissemination: string;
  active: string;
  priority: string;
  history: string;
  website: string;

  executiveSummaryLength: string;
  targetPopulationLength: string;
  goalsLength: string;
  // activityLength: number;
  timeTableLength: string;
  partnersLength: string;
  differLength: string;
  involveLength: string;
  staffLength: string;
  strategyLength: string;
  evaluationLength: string;
  disseminationLength: string;
  activeLength: string;
  priorityLength: string;
  historyLength: string;
  websiteLength: string;


  activities = [
    { value: '1', viewValue: 'New' },
    { value: '2', viewValue: 'Ongoing' }
  ];

  activitySelected: any;
  newOrOngoing: any;

  canCreateFP: boolean;

  //not sure
  ShowMessage = false;
  message: any;

  @ViewChild(CreateFullProposalItemsComponent)
  private fpItemsComponent: CreateFullProposalItemsComponent;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private createFullProposalService: CreateFullProposalService,
    private createFpItemService: CreateFpItemService,
    private getLoiService: GetLoiService,
  ) {

    //retreive the parameter
    this.route.params.subscribe(params => {
      console.log(params);
      this.orgID = params.orgID;
      this.loiID = params.loiID;
    });

    // this.canCreateFP = false;
    this.canCreateFP = true;

    this.executiveSummary$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.executiveSummaryLength = term.length.toString();
        this.executiveSummaryChange()
      });

    this.targetPopulation$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.targetPopulationLength = term.length.toString();
        this.targetPopulationChange()
      });
    this.goals$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.goalsLength = term.length.toString();
        this.goalsChange()
      });

    //scrap
    // this.activity$.pipe(
    //   debounceTime(400),
    //   distinctUntilChanged())
    //   .subscribe(term => {

    //     this.activity = term;
    //     this.activityChange()
    //   });

    this.timeTable$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.timeTableLength = term.length.toString();
        this.timeTableChange()
      });

    this.partners$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.partnersLength = term.length.toString();
        this.partnersChange()
      });

    this.differ$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.differLength = term.length.toString();
        this.differChange()
      });

    this.involve$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.involveLength = term.length.toString();
        this.involveChange()
      });

    this.staff$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.staffLength = term.length.toString();
        this.staffChange()
      });

    this.strategy$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.strategyLength = term.length.toString();
        this.strategyChange()
      });

    this.evaluation$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.evaluationLength = term.length.toString();
        this.evaluationChange()
      });

    this.dissemination$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.disseminationLength = term.length.toString();
        this.disseminationChange()
      });

    this.active$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.activeLength = term.length.toString();
        this.activeChange()
      });

    this.priority$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.priorityLength = term.length.toString();
        this.priorityChange()
      });

    this.history$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.historyLength = term.length.toString();
        this.historyChange()
      });

    this.website$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.websiteLength = term.length.toString();
        this.websiteChange()
      });

  }

  ngOnInit() {

    this.getLOI(this.loiID);

    this.defaultValues();

  }

  defaultValues() {
    this.executiveSummaryLength = '0';
    this.targetPopulationLength = '0';
    this.goalsLength = '0';
    // this.activityLength = 0; // no length for this
    this.timeTableLength = '0';
    this.partnersLength = '0';
    this.differLength = '0'
    this.involveLength = '0';
    this.staffLength = '0';
    this.strategyLength = '0';
    this.evaluationLength = '0';
    this.disseminationLength = '0';
    this.activeLength = '0';
    this.priorityLength = '0';
    this.historyLength = '0';
    this.websiteLength = '0';
  }

  createFullProposal() {

    console.log('create full proposal', 'this.orgID', this.orgID, 'this.loiID', this.loiID)

    //debug
    console.log('fpitems', this.fpItemsComponent.fpItems)

    var fpBody = {
      org: this.orgID,
      loi: this.loi.id,
      executiveSummary: this.executiveSummary,
      targetPopulation: this.targetPopulation,
      goals: this.goals,
      activity: this.activity,
      timeTable: this.timeTable,
      partners: this.partners,
      differ: this.differ,
      involve: this.involve,
      staff: this.staff,
      strategy: this.strategy,
      evaluation: this.evaluation,
      dissemination: this.dissemination,
      active: this.active,
      priority: this.priority,
      history: this.history,
      website: this.website
    }

    console.log('body', fpBody)

    //call the service
    this.createFullProposalService.createFP(fpBody)
      .subscribe(
        (result) => {

          console.log('result', result)
          this.fpID = result.result.id;

          console.log('fp Created');

          console.log('now creating full proposal items')

          //pass in the full proposal id
          let fpItemBody = {
            fpItems: this.fpItemsComponent.fpItems,
            fp: this.fpID
          }

          console.log('fpItemBody', fpItemBody)

          //call the service
          this.createFpItemService.createFPItems(fpItemBody)
            .subscribe(
              (result) => {

                console.log('Fp Items Created', result);
                console.log('orgID', this.orgID);
                // this.loiInfo = result.result;

                // console.log('new this.loiInfo.id', this.loiInfo.id);

                //route to loi page
                this.router.navigate(['/organization/' + this.orgID]);

              },
              err => console.log(err)
            );


        },
        err => console.log(err)
      );


  }

  newOrOngoingChange(newObj) {
    console.log('newOrOngoing change', newObj)

    this.newOrOngoing = newObj;

    //this.verifyInput();

  }

  executiveSummaryChange() {
    console.log("executiveSummaryChange");

    this.ShowMessage = false;

  }

  targetPopulationChange() {
    console.log("targetPopulationChange");

    this.ShowMessage = false;

  }

  goalsChange() {
    console.log("goalsChange");

    this.ShowMessage = false;

  }

  activityChange() {
    console.log("activityChange");

    this.ShowMessage = false;

  }

  timeTableChange() {
    console.log("timeTableChange");

    this.ShowMessage = false;

  }

  partnersChange() {
    console.log("executiveSummaryChange");

    this.ShowMessage = false;

  }

  differChange() {
    console.log("differChange");

    this.ShowMessage = false;

  }

  involveChange() {
    console.log("involveChange");

    this.ShowMessage = false;

  }

  staffChange() {
    console.log("staffChange");

    this.ShowMessage = false;

  }

  strategyChange() {
    console.log("strategyChange");

    this.ShowMessage = false;

  }

  evaluationChange() {
    console.log("evaluationChange");

    this.ShowMessage = false;

  }

  disseminationChange() {
    console.log("disseminationChange");

    this.ShowMessage = false;

  }

  activeChange() {
    console.log("activeChange");

    this.ShowMessage = false;

  }

  priorityChange() {
    console.log("priorityChange");

    this.ShowMessage = false;

  }

  historyChange() {
    console.log("historyChange");

    this.ShowMessage = false;

  }

  websiteChange() {
    console.log("websiteChange");

    this.ShowMessage = false;

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

}
