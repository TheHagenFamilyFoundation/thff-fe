import { Component, OnInit, ViewChild } from '@angular/core';

import { GetFullProposalService } from '../../services/full-proposal/get-full-proposal.service';
// import { FPStatusService } from '../../services/ful-proposal/fp-status.service';
// import { DirectorSelectedFPComponent } from './director-selected-fp/director-selected-fp.component';


@Component({
  selector: 'app-director-fps',
  templateUrl: './director-fps.component.html',
  styleUrls: ['./director-fps.component.css']
})
export class DirectorFpsComponent implements OnInit {

  Loaded: boolean;
  Printable: boolean;

  fullproposals: any;

  constructor(public getFullProposalService: GetFullProposalService,
    // private loiStatusService: LOIStatusService
  ) {

    this.Loaded = false;
    this.Printable = false;

  }

  ngOnInit() {

    this.getFPs();

  }

  getFPs() {

    this.Loaded = false;

    // this.setButtons(0);

    this.getFullProposalService.getAllFPs()
      .subscribe(
        (fps) => {

          console.log('fps', fps);

          this.fullproposals = fps;

          this.Loaded = true;

        })

  }

  getPrintable(printable) {
    console.log('printable', printable)

    if (printable === true) {
      this.Printable = true;
    }
    else {
      this.Printable = false;
    }


  }

}
