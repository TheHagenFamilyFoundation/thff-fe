import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public snackBar: MdSnackBar) {

        console.log("help - auth guard");

    }

    canActivate() {

        console.log("this is the canActivate function");

        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // Simple message.
        let snackBarRef = this.snackBar.open('You need to be logged In to access that page', 'OK', {
            duration: 3000
        });

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}