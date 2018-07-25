import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetLoiService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getLOIbyID(loiID: string): Observable<any> {

    let urlString = this.API_URL + "/loi?loiID=" + loiID;

    return this.http.get(urlString);
  }

  //retrieves the LOIs that this user has created
  getLOIbyuserID(userID: string): Observable<any> {

    let urlString = this.API_URL + "/loi?userid=" + userID;

    return this.http.get(urlString);
  }

  //retrieves the LOIs of an org
  getLOIbyorgID(orgID: string): Observable<any> {

    let urlString = this.API_URL + "/loi?org=" + orgID;

    return this.http.get(urlString);
  }

  getAllLOIs(): Observable<any> {

    let urlString = this.API_URL + "/loi";

    return this.http.get(urlString);

  }

}
