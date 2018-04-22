import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-grant-requests',
  templateUrl: './user-grant-requests.component.html',
  styleUrls: ['./user-grant-requests.component.css']
})
export class UserGrantRequestsComponent implements OnInit {

  @Input()
  user: any;

  constructor() { }

  ngOnInit() {
  }

}
