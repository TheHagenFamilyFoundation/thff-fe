import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

//Home
import { HomeComponent } from './home/home.component'

import { AboutusComponent } from './home/aboutus/aboutus.component'
import { ApplicationMaterialsComponent } from './home/application-materials/application-materials.component';
import { ProcessComponent } from './home/application-materials/process/process.component';


import { ApplicationTimelineComponent } from './home/application-timeline/application-timeline.component';

import { InthenewsComponent } from './home/inthenews/inthenews.component';
import { GrantsAwardedComponent } from './home/grants-awarded/grants-awarded.component';
import { FrequentlyAskedQuestionsComponent } from './home/frequently-asked-questions/frequently-asked-questions.component';

//Login
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ResetPasswordOrUsernameComponent } from './login/reset-password-or-forgot-username/reset-password-or-forgot-username.component';

//letintmenu
import { LetintmenuComponent } from './letintmenu/letintmenu.component'
//Letint and LetintStatus
import { LetintComponent } from './letintmenu/letint/letint.component'
import { LetintStatusComponent } from './letintmenu/letint-status/letint-status.component'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //login
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset-password-or-username', component: ResetPasswordOrUsernameComponent },


    { path: 'about', component: AboutusComponent },
    { path: 'application-materials', component: ApplicationMaterialsComponent },
    { path: 'process', component: ProcessComponent },


    { path: 'application-timeline', component: ApplicationTimelineComponent },

    {
        path: 'inthenews', component: InthenewsComponent,
        children: [
            { path: '2001'  }  //go to the senior design project
        ]
    },
    //child routes


    { path: 'grants-awarded', component: GrantsAwardedComponent },
    { path: 'frequently-asked-questions', component: FrequentlyAskedQuestionsComponent },


    { path: 'letintmenu', component: LetintmenuComponent, canActivate: [AuthGuard] },
    { path: 'letint', component: LetintComponent, canActivate: [AuthGuard] },
    { path: 'status', component: LetintStatusComponent, canActivate: [AuthGuard] },

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