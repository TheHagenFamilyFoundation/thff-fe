import { Component, OnInit } from '@angular/core';
import { GrantService } from '../../services/grants/grant.service'
import { Grant } from '../../services/grants/grant'

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

  grantYears: any[];

  constructor(private grantService: GrantService) { }

  ngOnInit() {

    console.log("Grants - ngOnInit");

    this.grants = [];
    this.grantYears = [];

    console.log("this.grants");
    console.log(this.grants);

    this.getCurrentYear();

    this.getGrantYears();


    this.initialGetGrants();

  }

  getCurrentYear(): void {

    console.log("getCurrentYear");

    var today = new Date();

    console.log(today.getFullYear());

    this.currentYear = today.getFullYear();
  }

  getGrantYears(): void {

    console.log("getGrantYears");

    //this.grantYears.push(this.currentYear)

    for (let i = this.currentYear; i >= 2000; i--) {

      //debug
      console.log("i =" + i);

      this.grantYears.push(i);
    }

    console.log(this.grantYears);

  }

  initialGetGrants(): void {

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

        if (this.grants.length == 0) {
          this.grants = grants;
        }
        else {
          grants.forEach((item, index) => {
            console.log(item);

            this.grants.push(item);

          })

        }


        console.log(this.grants);

        // );
      });
  }//end of getGrantsByYear



  topFunction(): void {

    console.log('topFunction')

    window.scrollTo(0, 0) //scroll back up to the top

  }

}
