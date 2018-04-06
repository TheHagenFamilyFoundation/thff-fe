import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class CreateOrganizationsService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  createOrganization(body) {

    let urlString = this.API_URL + '/organization';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    this.http.post(urlString, this.body)
      .subscribe(data => {
        this.results = data;

      })
  }

}