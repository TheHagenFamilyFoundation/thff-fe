import { Component, OnInit } from '@angular/core';
import { GrantService } from '../../services/grant.service'
import { Grant } from '../../grant'

@Component({
  selector: 'app-grants-awarded',
  templateUrl: './grants-awarded.component.html',
  styleUrls: ['./grants-awarded.component.css']
})
export class GrantsAwardedComponent implements OnInit {

  title = "Grants Awarded"

  currentYear: number;

  //arrays
  grants: Grant[];

  constructor(private grantService: GrantService) { }

  ngOnInit() {

    console.log("Grants - ngOnInit");

    this.grants = [];

    console.log("this.grants");
    console.log(this.grants);


    // //this.getGrants();
    // this.getGrantsByYear(2000);

    this.initialGetGrants();

  }

  initialGetGrants(): void {

    var today = new Date();

    console.log(today.getFullYear());

    this.currentYear = today.getFullYear();

    //this.getGrantsByYear(this.currentYear);
    this.getGrantsByYear(2015);

  }

  //gets all Grants
  getGrants(): void {
    this.grantService
      .getAllGrants()
      .subscribe(
      (grants) => {
        console.log(grants);
        this.grants = grants;
      }
      );
  }

  getGrantsByYear(year: number): void {
    this.grantService
      .getGrantsByYear(year)
      .subscribe(
      (grants) => {
        //debug
        console.log(grants);
        console.log("grants");
        //console.log(this.grants);

        // if (this.grants) {
        //   this.grants = grants;
        // }
        // else {
        grants.forEach((item, index) => {
          console.log(item);

          this.grants.push(item);

        })

        console.log(this.grants);

      }
      );
  }




}
