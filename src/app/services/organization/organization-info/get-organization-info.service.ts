import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetOrganizationInfoService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  getOrgInfobyOrgInfoID(orgInfoID: string): Observable<any> {

    let urlString = this.API_URL + "/organizationInfo?organizationID=" + orgInfoID;

    return this.http.get(urlString);

  }


}
