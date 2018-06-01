import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InOrgService } from "../services/user/in-org.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //check basic row height
  basicRowHeight = 400;

  user;

  message: string;

  constructor(private router: Router, private inOrg: InOrgService) {
  }

  ngOnInit() {

    if (!localStorage.getItem('currentUser')) {
      // not logged in so redirect to login page
      this.router.navigate(['/login']);
    }

    this.user = JSON.parse(localStorage.getItem('currentUser'));

    console.log("User - this.user");
    console.log(this.user);

    this.inOrg.currentMessage.subscribe(message => this.message = message)

  }

}
