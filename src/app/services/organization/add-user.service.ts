import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  API_URL = environment.API_URL;

  data: any;

  constructor(private http: HttpClient) { }

  addUser(users): Observable<any> {

    let data = users;

    console.log('data', data)

    return this.http.post(this.API_URL + '/addUser', data)
  }

}
