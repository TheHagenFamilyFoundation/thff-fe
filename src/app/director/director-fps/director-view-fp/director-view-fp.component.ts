import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

//services
import { GetFullProposalService } from '../../../services/full-proposal/get-full-proposal.service';

@Component({
  selector: 'app-director-view-fp',
  templateUrl: './director-view-fp.component.html',
  styleUrls: ['./director-view-fp.component.css']
})
export class DirectorViewFPComponent implements OnInit {

  fpID: any;
  fp: any;
  FPid: any; //mongoid

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



  constructor(private getFullProposalService: GetFullProposalService, private route: ActivatedRoute, ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.fpID = params.id;
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
          this.FPid = this.fp.id;

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

  getOutputActivity() {

    //activity == 1
    var outputActivity = 'New';

    if (this.activity === 2) {
      outputActivity = 'Ongoing';
    }

    return outputActivity;

  }

}
