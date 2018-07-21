import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LOIStatusService {

  private statusSource = new BehaviorSubject('created'); //default to the first status
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(status: string) {
    this.statusSource.next(status)
  }

  getStatus(s: number): string {

    console.log('getting status')

    let status: string;

    //values: 
    //1-created
    //2- submitted
    //3-under review //where people are looking at it
    // 4-reviewed //done reviewing - we'll release the full proposal
    // 5-declined //not for second round
    // 6-need some indicator for second round - show the full proposal link

    switch (s) {
      case 1:
        status = 'Created'
        break;
      case 2:
        status = 'Submitted'
        break;
      case 3:
        status = 'Under Review'
        break;
      case 4:
        status = 'Reviewed'
        break;
      case 5:
        status = 'Declined'
        break;
      case 6:
        status = 'Second Round'
        break;
      case 7:
        status = 'Funded'
        break;

      default:
        break;
    }

    return status;

  }

}