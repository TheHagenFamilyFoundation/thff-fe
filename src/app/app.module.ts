import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './auth/auth.service';

import { MdGridListModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";

//Components

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
import { RegisterComponent } from './register/register.component';
import { ResetPasswordOrUsernameComponent } from './login/reset-password-or-forgot-username/reset-password-or-forgot-username.component';

import { LetintmenuComponent } from './letintmenu/letintmenu.component';
import { DirectorsMenuComponent } from './directors-menu/directors-menu.component';
import { LetintComponent } from './letintmenu/letint/letint.component';
import { LetintStatusComponent } from './letintmenu/letint-status/letint-status.component';

import { ResetPasswordComponent } from './login/reset-password-or-forgot-username/reset-password/reset-password.component';
import { ForgotUsernameComponent } from './login/reset-password-or-forgot-username/forgot-username/forgot-username.component';

import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';




@NgModule({
    declarations: [AppComponent,
        //Home
        HomeComponent,
        AboutusComponent, ApplicationMaterialsComponent, ApplicationTimelineComponent,
        //login
        LoginComponent, RegisterComponent
        , ResetPasswordOrUsernameComponent,

        DirectorsMenuComponent, InthenewsComponent, GrantsAwardedComponent,
        FrequentlyAskedQuestionsComponent, ProcessComponent,

        LetintmenuComponent, LetintComponent, LetintStatusComponent, ResetPasswordComponent, ForgotUsernameComponent, TableOfContentsComponent
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule,

        FlexLayoutModule,//.forRoot(),
        //Material Design
        MdGridListModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSidenavModule
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard, AuthService
    ]
})
export class AppModule { }
