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


  constructor() {


    window.onscroll = function () {

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }

    };

  }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = location;
  }

  // When the user clicks on the button, scroll to the top of the document
  //function 
  topFunction(): void {

    console.log('topFunction')

    window.scrollTo(0, 0) //scroll back up to the top

  }


}
