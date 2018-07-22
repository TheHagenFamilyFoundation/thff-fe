import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Doc501c3StatusService {

  constructor() { }

  getStatus(s: number): string {

    let status: string;

    //values: 
    //1-created
    //2- valid
    //3- needs work

    switch (s) {
      case 1:
        status = 'Created'
        break;
      case 2:
        status = 'Valid'
        break;
      case 3:
        status = 'Needs Work'
        break;
      default:
        console.log('default')
        break;
    }

    return status;

  }

}
