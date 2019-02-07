import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { DirectorService } from "../../services/user/director.service";

@Component({
  selector: 'directors-menu',
  templateUrl: './directors-menu.component.html',
  styleUrls: ['./directors-menu.component.css']
})
export class DirectorsMenuComponent implements OnInit {

  currentUser: any;

  accessLevel: number;

  IsDirector: boolean;

  //check basic row height
  basicRowHeight = 400;

  constructor(
    public authService: AuthService,
    public router: Router,
    public directorService: DirectorService) {

    //check if authenticated
    if (!this.authService.isExpired()) {
      console.log("currentUser");
      console.log(localStorage.getItem('currentUser'));
      //console.log(localStorage.getItem('currentUser.username'));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

      //check if they have access
      this.accessLevel = this.currentUser.accessLevel;

      if (this.accessLevel > 1) {

        this.IsDirector = true;

        //   this.directorService.changeMessage(this.IsDirector)

      }
      else {
        this.IsDirector = false;

        //   this.directorService.changeMessage(this.IsDirector)

        this.router.navigate(['/logout']);

      }

    } else {
      //logout
      this.router.navigate(['/logout']);
    }

  }

  ngOnInit() {
  }

}
