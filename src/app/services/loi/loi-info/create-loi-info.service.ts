import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateLoiInfoService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  createLoiInfo(body): Observable<any> {

    console.log('createLoiInfo');

    let urlString = this.API_URL + '/loiInfo';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    return this.http.post(urlString, this.body)

  }

}
