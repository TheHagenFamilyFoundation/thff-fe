import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateOrganizationInfoService {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  createOrganizationInfo(body) {

    console.log('createOrganizationInfo');

    let urlString = this.API_URL + '/organizationInfo';

    this.body = body;

    console.log(this.body);
    console.log(urlString);

    //send to api

    return this.http.post(urlString, this.body)

  }


}
