import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class InOrgService {

  private inOrgSource = new BehaviorSubject(false);
  currentInOrg = this.inOrgSource.asObservable();

  constructor() { }

  changeMessage(inOrg: boolean) {
    this.inOrgSource.next(inOrg)
  }

}