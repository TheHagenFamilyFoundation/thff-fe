import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public snackBar: MatSnackBar) {

        console.log("help - auth guard");

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log("this is the canActivate function");

        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        let snackBarRef = this.snackBar.open('You need to be logged In to access that page', 'OK', {
            duration: 3000
        });

        // not logged in so redirect to login page
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}