import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { ChangeEmailService } from '../../services/user/change-email.service';

//debounce
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  newEmail$ = new Subject<string>();

  email: any;
  newEmail: any;

  @Input()
  user: any;

  updatedUser: any;

  ValidChangeEmail: any;

  CanChangeEmail = false;

  //@ViewChild('ce') ce: ElementRef;

  constructor(private changeEmailService: ChangeEmailService) {

    this.newEmail$
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {

        this.newEmail = term;
        this.newEmailChange()
      });

  }

  ngOnInit() {

    console.log(this.user.email);

    this.email = this.user.email;

  }

  changeEmail(): void {
    console.log("changeEmail Pressed");

    var data = {
      username: this.user.username,
      email: this.newEmail
    }

    this.ValidChangeEmail = this.changeEmailService.changeEmail(data)
      .subscribe(
        (data) => {
          console.log("new email set");
          console.log("data");
          console.log(data);

          //edit local storage
          this.email = this.newEmail;
          this.newEmail = '';

          // this.ce.nativeElement.value = '';

          this.updatedUser = JSON.parse(localStorage.getItem('currentUser'));

          this.updatedUser.email = this.email;
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(this.updatedUser));


        });
  }//end of changeEmail

  newEmailChange(): void {

    console.log("newEmailChange");

    //add in logic for valid email

    if (this.newEmail != "") {
      this.CanChangeEmail = true;
    }
    else {
      this.CanChangeEmail = false;
    }
  }

}
