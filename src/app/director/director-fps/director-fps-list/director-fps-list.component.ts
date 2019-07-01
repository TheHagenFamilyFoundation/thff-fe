import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-director-fps-list',
  templateUrl: './director-fps-list.component.html',
  styleUrls: ['./director-fps-list.component.css']
})
export class DirectorFpsListComponent implements OnInit {

  @Input()
  fps: any

  constructor() { }

  ngOnInit() {
  }


  //pass in a full proposal field
  //returns the field length
  calculateLength(field) {
    return field.length;
  }

  getOutputActivity(activity) {

    //activity == 1
    var outputActivity = 'New';

    if (activity === 1) {
      outputActivity = 'Ongoing';
    }

    return outputActivity;

  }

}
