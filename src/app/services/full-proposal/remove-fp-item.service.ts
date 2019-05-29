import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RemoveFpItemService {

  API_URL: string;

  data: any;

  constructor(private http: HttpClient, private authService: AuthService, ) {

    if (!environment.production) {
      this.API_URL = environment.API_URL;
    }
    else {
      this.API_URL = this.authService.getBackendURL();
      console.log('this.API_URL', this.API_URL)
    }

    console.log('this.API_URL', this.API_URL)

  }

  deleteFPItem(fpItem): Observable<any> {

    let data = fpItem;

    console.log('data', data)

    return this.http.delete(this.API_URL + `/fullproposalitem/${data.id}`)
  }

}
