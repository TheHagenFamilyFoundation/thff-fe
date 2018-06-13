import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteOrganizationInfoService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  deleteOrgInfobyOrgInfoID(orgInfoID: string): Observable<any> {

    console.log('deleteOrgInfobyOrgID')

    let urlString = this.API_URL + "/organizationInfo/" + orgInfoID;

    return this.http.delete(urlString);

  }

}
