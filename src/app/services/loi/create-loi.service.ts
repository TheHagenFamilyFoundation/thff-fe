import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateLoiService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  createLOI(body): Observable<any> {

    console.log('createLOI');

    let urlString = this.API_URL + '/loi';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    return this.http.post(urlString, this.body)
  }
}
