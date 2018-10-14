
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grant } from './grant'
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable()
export class GrantApiService {

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

  public getAllGrants(): Observable<any> {

    console.log("getAllGrants");

    let urlString = this.API_URL + '/grant?limit=0'

    return this.http.get(urlString);
  }//getAllGrants

  public getGrantsByYear(year: number): Observable<any> {

    console.log("getGrantsByYear");

    let urlString = this.API_URL + '/grant?where={\"Year\":' + year + '}'

    console.log(urlString)

    return this.http.get(urlString);
  }//getGrantsByYear

  // public createGrant(grant: Grant): Observable<Grant> {
  //   return this.http
  //     .post(this.API_URL + '/grant', grant)
  //     .map(response => {
  //       return new Grant(response.json());
  //     })
  //     .catch(this.handleError);
  // }

  // public getGrantById(grantId: number): Observable<Grant> {
  //   return this.http
  //     .get(this.API_URL + '/grant/' + grantId)
  //     .map(response => {
  //       return new Grant(response.json());
  //     })
  //     .catch(this.handleError);
  // }

  // public updateGrant(grant: Grant): Observable<Grant> {
  //   return this.http
  //     .put(this.API_URL + '/grant/' + grant.id, grant)
  //     .map(response => {
  //       return new Grant(response.json());
  //     })
  //     .catch(this.handleError);
  // }

  // public deleteGrantById(grantId: number): Observable<null> {
  //   return this.http
  //     .delete(this.API_URL + '/grant/' + grantId)
  //     .map(response => null)
  //     .catch(this.handleError);
  // }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return observableThrowError(error);
  }



}
