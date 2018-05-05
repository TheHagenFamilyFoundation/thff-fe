import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ChangePasswordService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  changePassword(data) {
    return this.http.put(this.API_URL + '/changePassword', data)
  }

}
