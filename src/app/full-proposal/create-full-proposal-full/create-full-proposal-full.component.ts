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

  canCreateFP: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router, ) {

    //retreive the parameter
    this.route.params.subscribe(params => {
      console.log(params);
      this.orgID = params.orgID;
      this.loiID = params.loiID;
    });

    this.canCreateFP = false;

  }

  ngOnInit() {
  }

  createFullProposal() {

    console.log('create full proposal')

  }

}
