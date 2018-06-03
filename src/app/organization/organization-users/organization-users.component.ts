import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.css']
})
export class OrganizationUsersComponent implements OnInit {

  @Input()
  org: any;

  constructor() { }

  ngOnInit() {
  }

}
