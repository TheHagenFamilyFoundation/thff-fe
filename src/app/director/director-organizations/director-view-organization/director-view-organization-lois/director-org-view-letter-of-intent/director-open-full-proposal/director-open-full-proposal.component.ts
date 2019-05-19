import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-director-open-full-proposal',
  templateUrl: './director-open-full-proposal.component.html',
  styleUrls: ['./director-open-full-proposal.component.css']
})
export class DirectorOpenFullProposalComponent implements OnInit {

  @Input()
  loi: any;
  loiID: any;

  constructor() { }

  ngOnInit() {
  }

}
