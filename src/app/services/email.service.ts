import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class EmailService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  //debug
  sendEmail(data) {
    return this.http.post(this.API_URL + '/email/', data)
    //.map(res => res.json())
    //.catch(this._errorHandler);
  }

  sendResetEmail(data) {
    return this.http.put(this.API_URL + '/sendResetEmail', data)
  }


  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }

}