import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubmitLoiService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  submitLOI(loiID: string): Observable<any> {
    return this.http.get(this.API_URL + '/submitLOI' + loiID)
  }

}
