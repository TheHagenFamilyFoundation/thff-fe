import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LOIStatusService {

  private statusSource = new BehaviorSubject('default message');
  currentStatus = this.statusSource.asObservable();

  constructor() { }

  changeStatus(status: string) {
    this.statusSource.next(status)
  }

}