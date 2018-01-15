import { Component, OnInit, Input } from '@angular/core';
import { GrantService } from '../../../services/grant.service'
import { Grant } from '../../../grant'

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
