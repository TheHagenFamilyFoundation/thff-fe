import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private isDirector = new BehaviorSubject(1); //initialize to false
  currentIsDirector = this.isDirector.asObservable();

  constructor() { }

  changeMessage(isDir: number) {
    this.isDirector.next(isDir)
  }

}
