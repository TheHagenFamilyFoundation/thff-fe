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

  //heroes: Hero[];
  grants: Grant[];

  constructor(private grantService: GrantService) { }

  ngOnInit() {

    console.log("Grants - ngOnInit");

    //this.getGrants();

  }

  getGrants(): void {
    this.grantService
      .getAllGrants()
      .subscribe(
      (grants) => {
        this.grants = grants;
      }
      );
  }



}
