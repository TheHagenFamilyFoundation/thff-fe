import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ValidResetCodeService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  checkValidResetCode(resetCode: string): Observable<any> {

    let urlString = this.API_URL + "/ResetCodeCheck?resetCode=" + resetCode;

    return this.http.get(urlString);
  }

}
