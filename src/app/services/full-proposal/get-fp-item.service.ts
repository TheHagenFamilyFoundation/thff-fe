import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GetFpItemService {

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

  getFullProposalByID(fpItemID: string): Observable<any> {

    let urlString = this.API_URL + "/fullproposalitem?fpItemID=" + fpItemID;

    return this.http.get(urlString);
  }

  getFullProposalByFPID(fp: string): Observable<any> {

    let urlString = this.API_URL + "/fullproposalitem?fp=" + fp;

    return this.http.get(urlString);
  }

}