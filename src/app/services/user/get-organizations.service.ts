import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class GetOrganizationsService {


  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  //get Organization by username
  getOrgbyUsername(username: string): Observable<any> {

    let urlString = this.API_URL + "/organization?username=" + username;

    return this.http.get(urlString);
  }

  getOrganizationbyName(name: string): Observable<any> {

    let urlString = this.API_URL + "/organization?name=" + name;

    return this.http.get(urlString);
  }

}
