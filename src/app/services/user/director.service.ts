import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private isDirector = new BehaviorSubject(false); //initialize to false
  currentIsDirector = this.isDirector.asObservable();

  constructor() { }

  changeMessage(isDir: boolean) {
    this.isDirector.next(isDir)
  }

}
