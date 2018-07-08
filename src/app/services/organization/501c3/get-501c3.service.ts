import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Get501c3Service {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  get501c3(orgID: string): Observable<any> {


    let urlString = this.API_URL + "/get501c3/" + orgID;

    console.log('urlString', urlString)

    return this.http.get(urlString);
  }

}
