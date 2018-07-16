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

}