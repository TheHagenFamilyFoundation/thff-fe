import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LetterOfIntentSubmitCheckComponent } from '../letter-of-intent-submit-check/letter-of-intent-submit-check.component';

import { SubmitLoiService } from '../../services/loi/submit-loi.service';
import { LOIStatusService } from "../../services/loi/loi-status.service";

@Component({
  selector: 'app-letter-of-intent-submit',
  templateUrl: './letter-of-intent-submit.component.html',
  styleUrls: ['./letter-of-intent-submit.component.css']
})
export class LetterOfIntentSubmitComponent implements OnInit {

  @Input()
  loi: any;

  @Output() voted = new EventEmitter<boolean>();

  status: string;

  loiID: string;

  LOISubmitted: boolean;

  CanSubmit: boolean;

  loiLink = '/loi/'
  link: string;

  HasInfo: boolean;

  constructor(public dialog: MatDialog, private submitLoiService: SubmitLoiService, private loiStatus: LOIStatusService) {

    this.HasInfo = false;

    //this.CanSubmit = false; //for prod
    this.CanSubmit = true; //for testing

  }

  ngOnInit() {

    //this.checkIfSubmit();

    //check if loi info is created
    this.checkIfHasInfo();

    this.LOISubmitted = this.loi.submitted;

    this.loiID = this.loi.loiID;

    this.link = this.loiLink + this.loiID;

    this.loiStatus.currentStatus.subscribe(status => this.status = status)

  }

  checkIfHasInfo() {

    if (this.loi.info.length > 0) {
      this.HasInfo = true;
    }
    else {
      //set it back to false just in case
      this.HasInfo = false;
    }

  }

  submitLOI() {

    console.log('submitLOI pressed')

    //bring up modal to confirm submit

    this.openSubmitLOIDialog(this.loi)

  }

  openSubmitLOIDialog(loi): void {
    let dialogRef = this.dialog.open(LetterOfIntentSubmitCheckComponent, {
      width: '300px',
      data: { name: loi.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); //debug
      //maybe pull the organizations again
      console.log('result', result); //debug

      if (result) {

        console.log('submit pressed - submit')

        this.submit();

      }
      else {

        console.log('cancel pressed - submit')

      }

    });
  }

  submit() {

    console.log('submitting lOI')

    this.submitLoiService.submitLOI(this.loiID)
      .subscribe(
        (loi) => {

          console.log('loi', loi);

          console.log('this.link', this.link)

          let pullLOI = true;

          this.voted.emit(pullLOI);

          this.LOISubmitted = true;


        })

  }

  newMessage() {
    this.loiStatus.changeStatus("Hello from Sibling 2")
  }

}
