import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

//Home
import { HomeComponent } from './home/home.component'

import { AboutusComponent } from './home/aboutus/aboutus.component'
import { ApplicationMaterialsComponent } from './home/application-materials/application-materials.component';

//Login
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

//letintmenu
import { LetintmenuComponent } from './letintmenu/letintmenu.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //login
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'about', component: AboutusComponent },
    { path: 'application-materials', component: ApplicationMaterialsComponent },

    { path: 'letintmenu', component: LetintmenuComponent, canActivate: [AuthGuard] },

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