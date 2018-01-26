import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data) {
    return this.http.post('http://localhost:1337/email/', data)
    //.map(res => res.json())
    //.catch(this._errorHandler);
  }

  private _errorHandler(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server Error')
  }

}