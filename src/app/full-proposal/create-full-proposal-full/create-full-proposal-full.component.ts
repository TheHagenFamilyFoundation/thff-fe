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

  constructor(private route: ActivatedRoute,
    private router: Router, ) {

    //retreive the parameter
    this.route.params.subscribe(params => {
      console.log(params);
      this.loiID = params.loiID;
    });


  }

  ngOnInit() {
  }

}
