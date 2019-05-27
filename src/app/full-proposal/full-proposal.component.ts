import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//debounce
import { Subject } from 'rxjs';
import { map, takeUntil, tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

//services
import { GetFullProposalService } from '../services/full-proposal/get-full-proposal.service';

@Component({
  selector: 'app-full-proposal',
  templateUrl: './full-proposal.component.html',
  styleUrls: ['./full-proposal.component.css']
})
export class FullProposalComponent implements OnInit {

  fpID: any;

  fp: any; //the full proposal object

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

  Editing: boolean;

  CanSave: boolean;

  //not sure
  ShowMessage = false;
  message: any;

  constructor(private route: ActivatedRoute,
    public getFullProposalService: GetFullProposalService) {

    this.route.params.subscribe(params => {
      console.log(params);
      this.fpID = params.id;
    });

    this.Editing = false;
    this.CanSave = false;

    this.executiveSummary$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.executiveSummaryLength = term.length.toString();
        this.executiveSummary = term;
        this.executiveSummaryChange()
      });

    this.targetPopulation$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.targetPopulationLength = term.length.toString();
        this.targetPopulation = term;
        this.targetPopulationChange()
      });
    this.goals$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.goalsLength = term.length.toString();
        this.goals = term;
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
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.timeTableLength = term.length.toString();
        this.timeTable = term;
        this.timeTableChange()
      });

    this.partners$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.partnersLength = term.length.toString();
        this.partners = term;
        this.partnersChange()
      });

    this.differ$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.differLength = term.length.toString();
        this.differ = term;
        this.differChange()
      });

    this.involve$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.involveLength = term.length.toString();
        this.involve = term;
        this.involveChange()
      });

    this.staff$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.staffLength = term.length.toString();
        this.staff = term;
        this.staffChange()
      });

    this.strategy$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.strategyLength = term.length.toString();
        this.strategy = term;
        this.strategyChange()
      });

    this.evaluation$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.evaluationLength = term.length.toString();
        this.evaluation = term;
        this.evaluationChange()
      });

    this.dissemination$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.disseminationLength = term.length.toString();
        this.dissemination = term;
        this.disseminationChange()
      });

    this.active$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.activeLength = term.length.toString();
        this.active = term;
        this.activeChange()
      });

    this.priority$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.priorityLength = term.length.toString();
        this.priority = term;
        this.priorityChange()
      });

    this.history$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.historyLength = term.length.toString();
        this.history = term;
        this.historyChange()
      });

    this.website$.pipe(
      debounceTime(1000),
      distinctUntilChanged())
      .subscribe(term => {

        this.websiteLength = term.length.toString();
        this.website = term;
        this.websiteChange()
      });


  }

  ngOnInit() {

    console.log('fpID', this.fpID)

    this.getFullProposal();

    this.defaultValues();

  }

  //get full proposal
  getFullProposal() {

    this.getFullProposalService.getFullProposalByID(this.fpID)
      .subscribe(
        (fp) => {

          console.log('fp', fp);

          this.fp = fp[0];

          this.setFields();

        })

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

  setFields() {

    console.log('setting fields')

    this.executiveSummary = this.fp.executiveSummary;
    this.targetPopulation = this.fp.targetPopulation;
    this.goals = this.fp.goals;
    this.activity = this.fp.activity;
    this.timeTable = this.fp.timeTable;
    this.partners = this.fp.partners;
    this.differ = this.fp.differ;
    this.involve = this.fp.involve;
    this.staff = this.fp.staff;
    this.strategy = this.fp.strategy;
    this.evaluation = this.fp.evaluation;
    this.dissemination = this.fp.dissemination;
    this.active = this.fp.active;
    this.priority = this.fp.priority;
    this.history = this.fp.history;
    this.website = this.fp.website;

    this.executiveSummaryLength = this.fp.executiveSummary.length;
    this.targetPopulationLength = this.fp.targetPopulation.length;
    this.goalsLength = this.fp.goals.length;
    this.timeTableLength = this.fp.timeTable.length;
    this.partnersLength = this.fp.partners.length;
    this.differLength = this.fp.differ.length;
    this.involveLength = this.fp.involve.length;
    this.staffLength = this.fp.staff.length;
    this.strategyLength = this.fp.strategy.length;
    this.evaluationLength = this.fp.evaluation.length;
    this.disseminationLength = this.fp.dissemination.length;
    this.activeLength = this.fp.active.length;
    this.priorityLength = this.fp.priority.length;
    this.historyLength = this.fp.history.length;
    this.websiteLength = this.fp.website.length;

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

  edit() {
    console.log('edit pressed')

    this.Editing = true;

  }

  save() {
    console.log('save pressed')
    //the first time is create - the second time is a delete and create

    //console.log('this.loiInfo.id', this.loiInfo.id)

    this.Editing = false;

    // var body = {
    //   projectTitle: this.projectTitle,
    //   purpose: this.purpose,
    //   projectStartDate: this.projectStartDate.value,
    //   projectEndDate: this.projectEndDate.value,
    //   amountRequested: this.amountRequested,
    //   totalProjectCost: this.totalProjectCost,
    //   loi: this.loiID
    // }

    // console.log('body', body)

  }

  //cancel changes, retrieve the old from the db
  cancel() {
    this.Editing = false;

    this.getFullProposal(); // retrieve the full proposal again

  }


}
