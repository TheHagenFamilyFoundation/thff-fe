import { Component, OnInit, Input } from '@angular/core';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-director-fps-list',
  templateUrl: './director-fps-list.component.html',
  styleUrls: ['./director-fps-list.component.css']
})
export class DirectorFpsListComponent implements OnInit {

  fullImagePath = '/assets/images/pdf.png';

  Loading: boolean;

  //Descriptions - used in the html and in the export to pdf
  executiveSummaryDesc = 'Briefly explain why your agency is requesting this grant, what outcomes you hope to achieve, and how you will spend the funds if the grant is made (2000 characters max).';
  targetPopulationDesc = 'Describe the target population and how they will benefit (2000 characters max).';
  projectGoalsDesc = 'Describe the project goals, measurable objectives, and action plans (2000 characters max).';
  newOrOngoingDesc = 'Is this a new or ongoing activity for the organization?'; //more like a question than a desc
  timeTableDesc = 'Provide a timetable for implementation: (2000 characters max)';
  partnersDesc = 'If there are any other partners in the project, describe them and indicate how you will cooperate on the project (2000 characters max).';
  diffDesc = 'How does your proposed project differ from the work of other existing projects (in your organization or in other similar organizations; 2000 characters max))?';
  involveDesc = 'Describe the active involvement of constituents in defining problems to be addressed, making policy, and planning the program (2000 characters max).';
  staffDesc = 'Describe the qualifications of key staff and volunteers that will ensure the success of the program, and any staff training that will be needed(2000 characters max).';
  strategyDesc = 'Describe your long-term strategies for funding this project at end of grant period (2000 characters max).';
  evaluationDesc = 'Describe your plans for evaluation of the project, including how success will be defined and measured (2000 characters max).';
  disseminationDesc = 'How will the evaluation results be used and/or disseminated? If appropriate, how will the project be replicated? (2000 characters max).';
  activeDesc = 'Describe the active involvement of constituents in evaluating the program, if any (2000 characters max).';
  priorityDesc = 'In the event that you are not able to secure full funding, what are the priority items in the budget above? (2000 characters max)';
  historyDesc = 'Provide a brief history and overview of your organization (2000 characters max).';
  websiteDesc = 'If your organization has a website, provide the link here:';

  @Input()
  fps: any

  constructor() {

    this.Loading = false;

  }

  ngOnInit() {
  }


  //pass in a full proposal field
  //returns the field length
  calculateLength(field) {
    return field.length;
  }

  getOutputActivity(activity) {

    //activity == 1
    var outputActivity = 'New';

    if (activity === 1) {
      outputActivity = 'Ongoing';
    }

    return outputActivity;

  }

  exportToPDF() {
    console.log('export to pdf pressed')

    this.Loading = true;

    var pdf = new jsPDF('p', 'pt', 'a4'); //new jsPDF('p', 'pt', [ 595.28,  841.89])
    let promises = [];

    //First Page
    //shows title
    //count of full proposals
    //potentially a TOC later

    /* Title */
    //this is the title
    // pdf.setFontSize(40) //maybe
    pdf.setFontSize(12)
    pdf.text(200, 40, 'List of Full Proposals')

    pdf.text(200, 60, `Number of Full Proposals - ${this.fps.length}`) //id

    pdf.addPage();

    //individual full proposals

    console.log('this.fps.length', this.fps.length)
    for (let i = 0; i < this.fps.length; i++) {
      // let i = 0;//for debugging


      let fpDoc = this.fps[i].id;
      console.log('fpDoc', fpDoc)
      console.log('this.fps[i]', this.fps[i])

      let vertical = 40;

      //   //Output
      pdf.text(30, vertical, `Full Proposal - ${i + 1} - ${fpDoc}`) //id
      vertical += 20;
      pdf.text(30, vertical, `Organization - ${this.fps[i].organization.name}`) //org name
      vertical += 20;
      pdf.text(30, vertical, `Letter of Intent - ${this.fps[i].loi.name}`) //id

      vertical += 20;
      pdf.text(200, vertical, `Executive Sumnmary`) //executive summary title

      vertical += 20;
      //executive summary description
      var splitESDesc = pdf.splitTextToSize(this.executiveSummaryDesc, 525);
      pdf.text(30, vertical, splitESDesc);//executiveSummaryDesc split - word wrap

      vertical += 40;
      var splitES = pdf.splitTextToSize(this.fps[i].executiveSummary, 525);
      console.log('splitES.length', splitES.length)
      pdf.text(30, vertical, splitES);//executiveSummaryDesc split - word wrap

      pdf.addPage();


      //purpose page - reset back to 20
      vertical = 20;
      // vertical += 140;
      pdf.text(200, vertical, `Purpose`) //purpose title
      vertical += 20

      //purpose 

      //target population
      var splitTargetPopulationDesc = pdf.splitTextToSize(this.targetPopulationDesc, 525);
      pdf.text(30, vertical, splitTargetPopulationDesc);//targetPopulation split - word wrap

      vertical += 20;
      var splitTargetPopulation = pdf.splitTextToSize(this.fps[i].targetPopulation, 525);
      console.log('splitTargetPopulation.length', splitTargetPopulation.length)
      pdf.text(30, vertical, splitTargetPopulation);//executiveSummaryDesc split - word wrap

      //project goals 

      vertical += 300;

      //project goals
      var splitProjectGoalsDesc = pdf.splitTextToSize(this.projectGoalsDesc, 525);
      pdf.text(30, vertical, splitProjectGoalsDesc);

      vertical += 20;
      var splitprojectGoals = pdf.splitTextToSize(this.fps[i].goals, 525);
      console.log('splitprojectGoals.length', splitprojectGoals.length)
      pdf.text(30, vertical, splitprojectGoals);

      vertical += 375;
      //new or ongoing
      var splitNewOrOngoingDesc = pdf.splitTextToSize(this.newOrOngoingDesc, 525);
      pdf.text(30, vertical, splitNewOrOngoingDesc);//

      vertical += 20;
      var splitNewOrOngoing = pdf.splitTextToSize(this.getOutputActivity(this.fps[i].activity), 525);
      pdf.text(30, vertical, splitNewOrOngoing);//executiveSummaryDesc split - word wrap

      pdf.addPage();

      //reset the vertical
      vertical = 40;
      //timetable
      var splitTimeTableDesc = pdf.splitTextToSize(this.timeTableDesc, 525);
      pdf.text(30, vertical, splitTimeTableDesc);//targetPopulation split - word wrap

      vertical += 20;
      var splitTimeTable = pdf.splitTextToSize(this.fps[i].timeTable, 525);
      console.log('splitTimeTable.length', splitTimeTable.length)
      pdf.text(30, vertical, splitTimeTable);//executiveSummaryDesc split - word wrap

      vertical += 400;


      //partners
      var splitPartnersDesc = pdf.splitTextToSize(this.partnersDesc, 525);
      pdf.text(30, vertical, splitPartnersDesc);

      vertical += 40;
      var splitPartners = pdf.splitTextToSize(this.fps[i].partners, 525);
      console.log('splitPartners.length', splitPartners.length)
      pdf.text(30, vertical, splitPartners);


      pdf.addPage();
      //reset the vertical
      vertical = 40;
      //differ
      var splitDiffDesc = pdf.splitTextToSize(this.diffDesc, 525);
      pdf.text(30, vertical, splitDiffDesc);//targetPopulation split - word wrap

      vertical += 40;
      var splitDiff = pdf.splitTextToSize(this.fps[i].differ, 525);
      console.log('splitDiff.length', splitDiff.length)
      pdf.text(30, vertical, splitDiff);//executiveSummaryDesc split - word wrap

      vertical += 350;


      //involvement
      var splitInvolveDesc = pdf.splitTextToSize(this.involveDesc, 525);
      pdf.text(30, vertical, splitInvolveDesc);

      vertical += 40;
      var splitInvolvement = pdf.splitTextToSize(this.fps[i].involve, 525);
      console.log('splitInvolvement.length', splitInvolvement.length)
      pdf.text(30, vertical, splitInvolvement);



      pdf.addPage();
      //reset the vertical
      vertical = 40;
      //staff
      var splitStaffDesc = pdf.splitTextToSize(this.staffDesc, 525);
      pdf.text(30, vertical, splitStaffDesc);

      vertical += 40;
      var splitStaff = pdf.splitTextToSize(this.fps[i].staff, 525);
      console.log('splitStaff.length', splitStaff.length)
      pdf.text(30, vertical, splitStaff);

      vertical += 350;


      //strategy
      var splitStrategyDesc = pdf.splitTextToSize(this.strategyDesc, 525);
      pdf.text(30, vertical, splitStrategyDesc);

      vertical += 40;
      var splitStrategy = pdf.splitTextToSize(this.fps[i].strategy, 525);
      console.log('splitStrategy.length', splitStrategy.length)
      pdf.text(30, vertical, splitStrategy);

      pdf.addPage();


      //evaluation page - reset back to 20
      vertical = 20;
      // vertical += 140;
      pdf.text(200, vertical, `Evaluation`) //evaluation title
      vertical += 20

      //evaluation
      var splitEvaluationDesc = pdf.splitTextToSize(this.evaluationDesc, 525);
      pdf.text(30, vertical, splitEvaluationDesc);

      vertical += 40;
      var splitEvaluation = pdf.splitTextToSize(this.fps[i].evaluation, 525);
      console.log('splitEvaluation.length', splitEvaluation.length)
      pdf.text(30, vertical, splitEvaluation);

      vertical += 350;


      //dissemination
      var splitDisseminationDesc = pdf.splitTextToSize(this.disseminationDesc, 525);
      pdf.text(30, vertical, splitDisseminationDesc);

      vertical += 40;
      var splitDissemination = pdf.splitTextToSize(this.fps[i].dissemination, 525);
      console.log('splitDissemination.length', splitDissemination.length)
      pdf.text(30, vertical, splitDissemination);


      pdf.addPage();
      //reset the vertical
      vertical = 40;
      //active
      var splitActiveDesc = pdf.splitTextToSize(this.activeDesc, 525);
      pdf.text(30, vertical, splitActiveDesc);

      vertical += 40;
      var splitActive = pdf.splitTextToSize(this.fps[i].active, 525);
      console.log('splitActive.length', splitActive.length)
      pdf.text(30, vertical, splitActive);

      pdf.addPage();

      //budget page - reset back to 20
      vertical = 20;
      // vertical += 140;
      pdf.text(200, vertical, `Budget Narrative/Justification`) //budget title
      vertical += 20

      //skip for the items







      vertical += 400;

      //priority
      var splitPriorityDesc = pdf.splitTextToSize(this.priorityDesc, 525);
      pdf.text(30, vertical, splitPriorityDesc);

      vertical += 40;
      var splitPriority = pdf.splitTextToSize(this.fps[i].priority, 525);
      console.log('splitPriority.length', splitPriority.length)
      pdf.text(30, vertical, splitPriority);

      pdf.addPage();


      //your organization page - reset back to 20
      vertical = 20;
      // vertical += 140;
      pdf.text(200, vertical, `Your Organization`) //your organization title
      vertical += 20

      //evaluation
      var splitHistoryDesc = pdf.splitTextToSize(this.historyDesc, 525);
      pdf.text(30, vertical, splitHistoryDesc);

      vertical += 40;
      var splitHistory = pdf.splitTextToSize(this.fps[i].history, 525);
      console.log('splitHistory.length', splitHistory.length)
      pdf.text(30, vertical, splitHistory);

      vertical += 350;


      //website
      var splitWebsiteDesc = pdf.splitTextToSize(this.websiteDesc, 525);
      pdf.text(30, vertical, splitWebsiteDesc);

      vertical += 40;
      var splitWebsite = pdf.splitTextToSize(this.fps[i].website, 525);
      console.log('splitWebsite.length', splitWebsite.length)
      pdf.text(30, vertical, splitWebsite);


      if (i < this.fps.length - 1) {
        pdf.addPage();
      }

    }

    this.Loading = false;

    pdf.save('converteddoc.pdf');
  }

}
