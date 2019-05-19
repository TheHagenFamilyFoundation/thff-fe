import { Component, OnInit, Input } from '@angular/core';

import { OpenFpPortalService } from './../../services/full-proposal/open-fp-portal.service';



@Component({
  selector: 'app-admin-full-proposal',
  templateUrl: './admin-full-proposal.component.html',
  styleUrls: ['./admin-full-proposal.component.css']
})
export class AdminFullProposalComponent implements OnInit {

  @Input()
  user: any

  accessLevel: number;

  constructor(
    public openFpPortalService: OpenFpPortalService
  ) { }

  ngOnInit() {

    console.log('this.user', this.user)

    this.accessLevel = this.user.accessLevel

  }

  openFullProposalPortal() {

  }

}
