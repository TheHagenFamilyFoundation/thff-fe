import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

//Home
import { HomeComponent } from './home/home.component'

//Login
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }