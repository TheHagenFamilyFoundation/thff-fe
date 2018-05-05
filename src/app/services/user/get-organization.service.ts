import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetOrganizationService {


  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  //get Organization by director
  getOrgbyDirector(username: string): Observable<any> {

    let urlString = this.API_URL + "/organization?director=" + username;

    return this.http.get(urlString);
  }

  getOrgbyName(name: string): Observable<any> {

    let urlString = this.API_URL + "/organization?name=" + name;

    return this.http.get(urlString);
  }

}
