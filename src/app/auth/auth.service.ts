import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs'

import { environment } from '../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {

    API_URL: string;

    jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient, private router: Router) {

        if (!environment.production) {
            this.API_URL = environment.API_URL;
        }
        else {
            this.API_URL = this.getBackendURL();
            console.log('this.API_URL', this.API_URL)
        }

        console.log('this.API_URL', this.API_URL)

    }

    login(data, csrf) {

        console.log('login', data)
        console.log('this.API_URL', this.API_URL)

        return this.http.put<any>(`${this.API_URL}/login`, data)
            .pipe(map(result => {

                //new 
                //sends the result to the login component which thens add to localStorage

                // old
                // login successful if there's a jwt token in the response
                // if (result && result.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(result.user));
                // }

                return result;
            }));
    }

    logout() {
        console.log("logging out")

        // Remove tokens and profile and update login status subject
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');

        this.router.navigate(['/home']);

    }

    tokenGetter() {
        return localStorage.getItem('token');
    }

    isExpired() {
        return this.jwtHelper.isTokenExpired(this.tokenGetter());
    }

    initializeBackendURL(): Observable<any> {

        if (environment.production == true) {

            console.log('getting backend URL', window.location.origin + '/backend')

            return this.http.get(window.location.origin + '/backend')

        }

    }

    getBackendURL(): string {

        return sessionStorage.getItem('backend_url');

    }

}