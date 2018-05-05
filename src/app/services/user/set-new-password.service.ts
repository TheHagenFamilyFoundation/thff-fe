import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class SetNewPasswordService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  setNewPassword(data): Observable<any> {

    //console.log(data);
    //data is the user current, new, and confirm passwords
    return this.http.put(this.API_URL + '/setNewPassword', data)
  }

}
