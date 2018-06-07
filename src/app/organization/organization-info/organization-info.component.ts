import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css']
})
export class OrganizationInfoComponent implements OnInit {

  @Input()
  org: any;

  editing = false;

  constructor() { }

  ngOnInit() {
  }

  edit() {
    console.log('edit pressed')

    this.editing = true;

  }

  save() {
    console.log('save pressed')

    this.editing = false;
  }

}
