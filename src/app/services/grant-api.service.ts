import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grant } from '../grant'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class GrantApiService {

  API_URL = 'https://hagenfoundationbackend.herokuapp.com'
  //API_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

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
    return Observable.throw(error);
  }



}
