import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Upload501c3Service {

  API_URL = environment.API_URL;

  results;
  body;

  constructor(private http: HttpClient) { }

  // file from event.target.files[0]
  upload501c3(file: File): Observable<HttpEvent<any>> {

    console.log('upload501c3');

    let urlString = this.API_URL + '/upload501c3';

    let formData = new FormData();
    formData.append('avatar', file);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', urlString, formData, options);
    return this.http.request(req);

  }


}
