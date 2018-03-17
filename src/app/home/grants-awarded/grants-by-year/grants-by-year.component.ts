import { Component, OnInit, Input } from '@angular/core';
import { GrantService } from '../../../services/grants/grant.service';
import { Grant } from '../../../services/grants/grant'
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-grants-by-year',
  templateUrl: './grants-by-year.component.html',
  styleUrls: ['./grants-by-year.component.css']
})
export class GrantsByYearComponent implements OnInit {

  title = "Grants By Year"

  @Input()
  year: number;

  //arrays
  grants: Grant[];

  constructor(private grantService: GrantService) {

    console.log("Grants By Year");

  }

  ngOnInit() {

    this.grants = [];

    console.log(this.year);


    this.getGrantsByYear(this.year);

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




}
