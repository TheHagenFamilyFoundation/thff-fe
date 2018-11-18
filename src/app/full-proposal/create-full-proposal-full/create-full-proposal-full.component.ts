import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//debounce
import { Subject } from 'rxjs';

import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  canCreateFP: boolean;

  //not sure
  ShowMessage = false;
  message: any;

  constructor(private route: ActivatedRoute,
    private router: Router, ) {

    //retreive the parameter
    this.route.params.subscribe(params => {
      console.log(params);
      this.orgID = params.orgID;
      this.loiID = params.loiID;
    });

    this.canCreateFP = false;

    this.executiveSummary$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.executiveSummary = term;
        this.executiveSummaryChange()
      });

    this.targetPopulation$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.targetPopulation = term;
        this.targetPopulationChange()
      });
    this.goals$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.goals = term;
        this.goalsChange()
      });

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

        this.timeTable = term;
        this.timeTableChange()
      });

    this.partners$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.partners = term;
        this.partnersChange()
      });

    this.differ$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.differ = term;
        this.differChange()
      });

    this.involve$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.involve = term;
        this.involveChange()
      });

    this.staff$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.staff = term;
        this.staffChange()
      });

    this.strategy$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.strategy = term;
        this.strategyChange()
      });

    this.evaluation$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.evaluation = term;
        this.evaluationChange()
      });

    this.dissemination$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.dissemination = term;
        this.disseminationChange()
      });

    this.active$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.active = term;
        this.activeChange()
      });

    this.priority$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.priority = term;
        this.priorityChange()
      });

    this.history$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.history = term;
        this.historyChange()
      });

    this.website$.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(term => {

        this.website = term;
        this.websiteChange()
      });

  }

  ngOnInit() {
  }

  createFullProposal() {

    console.log('create full proposal')

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


}
