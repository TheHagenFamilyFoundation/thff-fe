import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Delete501c3Service {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  delete501c3byOrgID(orgID: string): Observable<any> {

    console.log('delete501c3byOrgID')

    let urlString = this.API_URL + "/delete501c3/" + orgID;

    return this.http.delete(urlString);

  }

}
