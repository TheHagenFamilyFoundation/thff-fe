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
      //console.log("help")

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }

    };//this.scrollFunction() };

  }

  ngOnInit() {
  }

  goTo(location: string): void {
    window.location.hash = location;
  }

  // When the user scrolls down 20px from the top of the document, show the button
  //window.onscroll = function () { this.scrollFunction() };

  // //function 
  scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  //function 
  topFunction(): void {

    console.log('topFunction')

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //this.goTo('title');

    window.scrollTo(0, 0)

  }


}
