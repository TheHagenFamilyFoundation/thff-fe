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

//Login
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component';


import { LetintmenuComponent } from './letintmenu/letintmenu.component';
import { DirectorsMenuComponent } from './directors-menu/directors-menu.component'

@NgModule({
    declarations: [AppComponent,
        //Home
        HomeComponent,
        //login
        LoginComponent, RegisterComponent, LetintmenuComponent, DirectorsMenuComponent
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
