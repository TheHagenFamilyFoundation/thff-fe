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
  purposeDesc = 'Describe the target population and how they will benefit (2000 characters max).';
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

    var pdf = new jsPDF('p', 'mm', 'a4');
    let promises = [];

    //this is the title
    // pdf.setFontSize(40) //maybe
    pdf.setFontSize(12)
    pdf.text(75, 10, 'List of Full Proposals')

    // console.log('this.lois.length', this.lois.length)
    // for (let i = 0; i < this.lois.length; i++) {

    //   let loiDoc = this.lois[i].id;
    //   console.log('loiDoc', loiDoc)
    //   console.log('this.lois[i]', this.lois[i])

    //   let shift = 0;
    //   let vertical = 10;
    //   if (i == 0) {
    //     //first loi, shift everything down
    //     shift += 10;
    //   }

    //   //Output
    //   pdf.text(75, vertical + shift, `LOI - ${i + 1} - ${loiDoc}`) //id
    //   vertical += 10;
    //   pdf.text(75, vertical + shift, `LOI Name - ${this.lois[i].name}`) //id
    //   vertical += 10;

    //   //LOI Info
    //   if (this.lois[i].info && this.lois[i].info.length > 0) {
    //     pdf.text(75, vertical + shift, `Project Title - ${this.lois[i].info[0].projectTitle}`) //projectTitle

    //     /* Purpose */
    //     vertical += 10;
    //     pdf.text(15, vertical + shift, `Purpose`) //purpose
    //     var splitTitle = pdf.splitTextToSize(this.lois[i].info[0].purpose, 150);
    //     pdf.text(35, vertical + shift, splitTitle);

    //     vertical += 150;
    //     pdf.text(75, vertical + shift, `Project Start Date - ${this.lois[i].info[0].projectStartDate}`) //start date
    //     vertical += 10;
    //     pdf.text(75, vertical + shift, `Project End Date - ${this.lois[i].info[0].projectEndDate}`) //end date
    //     vertical += 10;
    //     pdf.text(75, vertical + shift, `Amount Requested - $${this.lois[i].info[0].amountRequested}`) //amount requested
    //     vertical += 10;
    //     pdf.text(75, vertical + shift, `Total Project Cost - $${this.lois[i].info[0].totalProjectCost}`) //total project cost
    //   }
    //   else {
    //     //output no info
    //     pdf.text(75, vertical + shift, `No Info`) //no info
    //   }

    //   if (i < this.lois.length - 1) {
    //     pdf.addPage();
    //   }

    // }

    this.Loading = false;

    pdf.save('converteddoc.pdf');
  }

}
