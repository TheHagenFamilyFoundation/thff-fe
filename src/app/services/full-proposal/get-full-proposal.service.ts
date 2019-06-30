import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetFullProposalService {

  API_URL: string;

  constructor(private http: HttpClient, private authService: AuthService, ) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

  }

  getFullProposalByID(fpID: string): Observable<any> {

    let urlString = this.API_URL + "/fullproposal?fpID=" + fpID;

    return this.http.get(urlString);
  }

  getFullProposalsByOrgID(orgID: string): Observable<any> {

    let urlString = this.API_URL + "/fullproposal?organization=" + orgID;

    return this.http.get(urlString);
  }

  getFullProposalsByLOIID(loi: any): Observable<any> {

    let urlString = this.API_URL + "/fullproposal?loi=" + loi.id;

    return this.http.get(urlString);
  }

  //get all full proposals - used for directors
  getAllFPs(): Observable<any> {

    let urlString = this.API_URL + "/fullproposal";

    console.log('urlString', urlString)
    return this.http.get(urlString);

  }

}
