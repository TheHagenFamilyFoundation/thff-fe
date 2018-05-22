import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetCSRFTokenService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getCSRF(): Observable<any> {

    let urlString = this.API_URL + "/security/grant-csrf-token";

    return this.http.get(urlString);
  }
}
