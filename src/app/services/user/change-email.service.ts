import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ChangeEmailService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  changeEmail(data) {
    return this.http.put(this.API_URL + '/changeEmail', data)
  }

}
