import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

    // Create a stream of logged in status to communicate throughout app
    loggedIn: boolean;
    loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

    constructor(private router: Router) {
        // If authenticated, set local profile property and update login status subject
        if (this.authenticated) {
            this.setLoggedIn(true);
        }
    }

    login() {
        console.log("auth service login");

        this.router.navigate(['/home']);

    }

    setLoggedIn(value: boolean) {
        // Update login status subject
        this.loggedIn$.next(value);
        this.loggedIn = value;
    }

    logout() {
        console.log("logging out")

        // Remove tokens and profile and update login status subject
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');

        this.router.navigate(['']);

        this.setLoggedIn(false);
    }

    get authenticated() {
        // Check if there's an unexpired access token
        return tokenNotExpired('token');
    }

}