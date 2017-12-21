import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Grant } from '../grant'
import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/operator/map'
 import 'rxjs/add/operator/catch'
// import 'rxjs/add/operator/throw'

@Injectable()
export class GrantApiService {

  API_URL = 'http://localhost:1337';


  constructor(private http: Http) { }

  public getAllGrants(): Observable<Grant[]> {
    return this.http
      .get(this.API_URL + '/grant')
      .map(response => {
        const grants = response.json();
        return grants.map((grant) => new Grant(grant));
      })
      .catch(this.handleError);
  }

  public createGrant(grant: Grant): Observable<Grant> {
    return this.http
      .post(this.API_URL + '/grant', grant)
      .map(response => {
        return new Grant(response.json());
      })
      .catch(this.handleError);
  }

  public getGrantById(grantId: number): Observable<Grant> {
    return this.http
      .get(this.API_URL + '/grant/' + grantId)
      .map(response => {
        return new Grant(response.json());
      })
      .catch(this.handleError);
  }

  public updateGrant(grant: Grant): Observable<Grant> {
    return this.http
      .put(this.API_URL + '/grant/' + grant.id, grant)
      .map(response => {
        return new Grant(response.json());
      })
      .catch(this.handleError);
  }

  public deleteGrantById(grantId: number): Observable<null> {
    return this.http
      .delete(this.API_URL + '/grant/' + grantId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }



}
