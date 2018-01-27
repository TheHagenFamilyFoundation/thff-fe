import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-type-new-password',
  templateUrl: './type-new-password.component.html',
  styleUrls: ['./type-new-password.component.css']
})
export class TypeNewPasswordComponent implements OnInit {

  title = "Type New Password"

  user: any;
  resetCode: any;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.resetCode = +params['resetCode']; // (+) converts string 'id' to a number

      console.log(this.resetCode)

      // In a real app: dispatch action to load the details here.
    });



    // //pulling from the localStorage
    // if () {

    // }
    // else {
    //   this.router.navigate(['/login']);
    // }

  }

}
