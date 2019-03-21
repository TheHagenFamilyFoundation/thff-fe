import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-update-main',
  templateUrl: './user-update-main.component.html',
  styleUrls: ['./user-update-main.component.css']
})
export class UserUpdateMainComponent implements OnInit {

  basicRowHeight = 400;

  @Input()
  user: any;

  constructor() { }

  ngOnInit() {
  }

}
