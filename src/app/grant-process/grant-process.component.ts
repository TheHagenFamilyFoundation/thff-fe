import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant-process',
  templateUrl: './grant-process.component.html',
  styleUrls: ['./grant-process.component.css']
})
export class GrantProcessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
