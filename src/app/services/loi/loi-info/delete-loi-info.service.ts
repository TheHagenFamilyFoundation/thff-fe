import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteLoiInfoService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  deleteLoiInfobyLoiInfoID(loiInfoID: string): Observable<any> {

    console.log('deleteLoiInfobyLoiID')

    let urlString = this.API_URL + "/loiInfo/" + loiInfoID;

    return this.http.delete(urlString);

  }

}
