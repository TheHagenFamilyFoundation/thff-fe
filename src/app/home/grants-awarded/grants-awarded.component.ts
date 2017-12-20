import { Component, OnInit } from '@angular/core';
import { GrantService } from '../../services/grant.service'

@Component({
  selector: 'app-grants-awarded',
  templateUrl: './grants-awarded.component.html',
  styleUrls: ['./grants-awarded.component.css']
})
export class GrantsAwardedComponent implements OnInit {

  title = "Grants Awarded"

  //heroes: Hero[];
  grants: any[];

  constructor(private grantService: GrantService) { }

  ngOnInit() {

    console.log("Grants - ngOnInit");

    this.getGrants();

  }

  getGrants(): void {
    this.grantService.getGrants().subscribe(
      (grants) => {
        this.grants = grants;
      }
    )
  }



}
