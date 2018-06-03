import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-requests',
  templateUrl: './organization-requests.component.html',
  styleUrls: ['./organization-requests.component.css']
})
export class OrganizationRequestsComponent implements OnInit {

  @Input()
  org: any;

  constructor() { }

  ngOnInit() {
  }

}
