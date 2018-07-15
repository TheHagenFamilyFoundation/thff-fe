import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LetterOfIntentSubmitCheckComponent } from '../../letter-of-intent/letter-of-intent-submit-check/letter-of-intent-submit-check.component';

import { SubmitLoiService } from '../../services/loi/submit-loi.service';

@Component({
  selector: 'app-letter-of-intent-submit',
  templateUrl: './letter-of-intent-submit.component.html',
  styleUrls: ['./letter-of-intent-submit.component.css']
})
export class LetterOfIntentSubmitComponent implements OnInit {

  @Input()
  loi: any;

  loiID: string;

  LOISubmitted: boolean;

  CanSubmit: boolean;

  loiLink = '/loi/'
  link: string;

  constructor(public dialog: MatDialog, private submitLoiService: SubmitLoiService) {

    //this.CanSubmit = false; //for prod
    this.CanSubmit = true; //for testing

  }

  ngOnInit() {

    //this.checkIfSubmit();

    this.LOISubmitted = this.loi.submitted;

    this.loiID = this.loi.loiID;

    this.link = this.loiLink + this.loiID;

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

          //pull the loi again

          //try routing to loi page again


        })

  }

}
