import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(data): Observable<any> {

    console.log('login', data);

    return this.http.put(this.API_URL + '/login', data)
  }



}