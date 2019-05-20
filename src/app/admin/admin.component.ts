import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { DirectorService } from "../services/user/director.service";

//utility
import { CreateFieldOpenFpService } from './../services/full-proposal/utility/create-field-open-fp.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser: any;

  accessLevel: number;

  IsDirector: boolean;

  //check basic row height
  basicRowHeight = 400;

  constructor(
    public authService: AuthService,
    public router: Router,
    public directorService: DirectorService,
    public createFieldOpenFpService: CreateFieldOpenFpService) {

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
