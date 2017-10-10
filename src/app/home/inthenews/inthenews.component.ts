import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inthenews',
  templateUrl: './inthenews.component.html',
  styleUrls: ['./inthenews.component.css']
})
export class InthenewsComponent implements OnInit {

  title = "THFF In the News!"

  fullImagePath = '/assets/images/news.h1.jpg';
  fullImagePath2 = '/assets/images/news1.jpg';
  fullImagePath3 = '/assets/images/overland1.jpg';
  fullImagePath4 = '/assets/images/cambodiankids.JPG';

  constructor() { }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = location;
  }


}
