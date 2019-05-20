import { Component, OnInit, Input } from '@angular/core';

import { OpenLoiFpService } from './../../../../../../services/full-proposal/open-loi-fp.service';

@Component({
  selector: 'app-director-open-full-proposal',
  templateUrl: './director-open-full-proposal.component.html',
  styleUrls: ['./director-open-full-proposal.component.css']
})
export class DirectorOpenFullProposalComponent implements OnInit {

  @Input()
  loi: any;
  loiID: any; //5 character

  Opened: boolean;

  constructor(public openLoiFpService: OpenLoiFpService) {

    this.Opened = false;

  }

  ngOnInit() {

    console.log('open full proposal - loi', this.loi)

    this.checkOpenFP();

  }

  openFullProposal(data) {

    console.log('openFullProposal', data) //debug

    console.log('this.loi', this.loi)

    let body = {
      id: this.loi.id,
      open: data
    }

    console.log('open - body', body)

    this.openLoiFpService.openFPs(body).subscribe(
      (loi) => {
        console.log('return - loi', loi)
        this.loi = loi;
        this.loiID = loi.loiID

        this.checkOpenFP();


      },
      (err) => {
        console.log(err)
      }
    )

  }

  checkOpenFP() {
    if (this.loi.openFp == true) {
      this.Opened = true;
    }
    else {
      this.Opened = false;
    }
  }


}
