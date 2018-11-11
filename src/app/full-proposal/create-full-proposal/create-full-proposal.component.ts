import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-create-full-proposal',
  templateUrl: './create-full-proposal.component.html',
  styleUrls: ['./create-full-proposal.component.css']
})
export class CreateFullProposalComponent implements OnInit {

  API_URL: string;

  CreateShort: boolean;

  constructor(private http: HttpClient,
    public authService: AuthService, public dialogRef: MatDialogRef<CreateFullProposalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)


  }

  ngOnInit() {
  }

  createFPFull() {

    //route to the full Full proposal create

    this.router.navigate(['/create-fp-full']);

  }

  createFPShort() {

    this.CreateShort = true;

  }


}
