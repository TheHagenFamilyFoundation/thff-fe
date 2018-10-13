import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {

    API_URL = environment.API_URL;

    jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient, private router: Router) { }

    login(data, csrf) {
        return this.http.put<any>(`${this.API_URL}/login`, data)
            .pipe(map(result => {
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

    getBackendURL() {

        if (environment.production == true) {

            console.log('getting backend URL', window.location.origin + '/backend')

            this.http.get(window.location.origin + '/backend')
                .subscribe(
                    (urlBackend) => {

                        console.log('urlBackend', urlBackend)
                        console.log('urlBackend 2')

                        // if (urlBackend) {
                        //     sessionStorage.setItem('url_backend', urlBackend.url);
                        // }
                        // else {
                        //     console.log('Can´t find the backend URL, using a failover value');
                        //     sessionStorage.setItem('url_backend', 'https://failover-url.com');
                        // }

                        //return urlBackend;

                    })

        }

    }

}