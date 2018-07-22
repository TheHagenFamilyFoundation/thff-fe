import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Validate501c3Service {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  validate501c3(data): Observable<any> {
    return this.http.put(this.API_URL + '/validate501c3', data)
  }

}
