import { Component, OnInit, Input } from '@angular/core';

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

  CanChangeEmail = false;

  constructor() {

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

    

  }

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
