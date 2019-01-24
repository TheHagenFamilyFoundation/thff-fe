import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  currentUser: any;

  constructor(public authService: AuthService, ) {

    if (!this.authService.isExpired()) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));

      if (localStorage.getItem('currentUser')) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      }

    }

  }

  ngOnInit() {
  }

}
