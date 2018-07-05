import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Create501c3Service {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  create501c3(body): Observable<any> {

    console.log('createOrganization');

    let urlString = this.API_URL + '/org501c3';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    return this.http.post(urlString, this.body)

  }

}
