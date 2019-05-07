import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// import { GetLoiService } from '../../../services/loi/get-loi.service';
// import { LOIStatusService } from '../../../services/loi/loi-status.service';

@Component({
  selector: 'app-loi-list',
  templateUrl: './loi-list.component.html',
  styleUrls: ['./loi-list.component.css']
})
export class LoiListComponent implements OnInit {

  @Input()
  lois: any;

  // lois: any

  Loaded: boolean;

  constructor(
    // public getLoiService: GetLoiService,
    // private loiStatusService: LOIStatusService
  ) {
    this.Loaded = false;
  }

  ngOnInit() {

    // this.getLOIs();

  }

  // getLOIs() {

  //   this.getLoiService.getAllLOIs()
  //     .subscribe(
  //       (lois) => {

  //         console.log('lois', lois);

  //         this.lois = lois;

  //         this.setStatuses();

  //         this.Loaded = true;

  //       })

  // }

  // setStatuses() {

  //   console.log('setting status')

  //   this.lois.forEach(loi => {

  //     console.log('before LOI', loi)

  //     console.log('status', loi.status)

  //     loi.status = this.configureStatus(loi.status);

  //     console.log('after LOI', loi)

  //   });

  // }

  //takes in a status s that is a number
  // configureStatus(s: number): string {

  //   return this.loiStatusService.getStatus(s)

  // }

}
