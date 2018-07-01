import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CreateOrganizationService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  createOrganization(body): Observable<any> {

    console.log('createOrganization');

    let urlString = this.API_URL + '/organization';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    return this.http.post(urlString, this.body)

  }

}