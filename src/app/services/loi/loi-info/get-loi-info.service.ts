import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetLoiInfoService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  getLoiInfobyLoiID(loiID: string): Observable<any> {

    console.log('getLoiInfobyLoiID')

    let urlString = this.API_URL + "/loiInfo?loi=" + loiID;

    return this.http.get(urlString);

  }

  getOrgInfobyID(loiInfoID: string): Observable<any> {

    let urlString = this.API_URL + "/loiInfo?loiInfoID=" + loiInfoID;

    return this.http.get(urlString);

  }
}
