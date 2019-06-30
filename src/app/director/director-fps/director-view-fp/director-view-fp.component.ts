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

  constructor(private getFullProposalService: GetFullProposalService) { }

  ngOnInit() {
  }

}
