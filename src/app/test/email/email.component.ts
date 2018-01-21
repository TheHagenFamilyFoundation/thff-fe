import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../email.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private _emailService: EmailService) { }

  ngOnInit() {
  }

  onSubmit(name, email, message) {
    this._emailService.sendEmail({
      from: 'Mailgun Sandbox <postmaster@sandboxXXXXXXXXXXXXXXXXXXXXX.mailgun.org>',
      to: email,
      name: name,
      text: message,
    })
      .subscribe(
      () => { },
      err => console.log(err)
      );
  }


}
