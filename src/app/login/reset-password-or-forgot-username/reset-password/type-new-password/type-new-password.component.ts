import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-new-password',
  templateUrl: './type-new-password.component.html',
  styleUrls: ['./type-new-password.component.css']
})
export class TypeNewPasswordComponent implements OnInit {

  title = "Type New Password"

  user: any;

  constructor(private router: Router) { }

  ngOnInit() {

    // //pulling from the localStorage
    // if () {
      
    // }
    // else {
    //   this.router.navigate(['/login']);
    // }

  }

}
