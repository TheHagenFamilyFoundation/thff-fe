import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import 'hammerjs';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatGridListModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule } from "@angular/flex-layout";

import { ContentsModule } from 'angular-contents';
import { NgxPageScrollModule } from 'ngx-page-scroll';

//guards
import { AuthGuard } from './_guards/auth.guard';

//services
//inside auth
import { AuthService } from './auth/auth.service';

import { GrantService } from './services/grants/grant.service';
import { GrantApiService } from './services/grants/grant-api.service';

import { ValidEmailService } from './services/user/valid-email.service';
import { ValidUserNameService } from './services/user/valid-username.service';
import { ValidResetCodeService } from './services/user/valid-resetcode.service';
import { SetNewPasswordService } from './services/user/set-new-password.service';
import { GetUserService } from './services/user/get-user.service';

import { EmailService } from './services/user/email.service';

import { ResetCodeService } from './services/user/reset-code.service';

//Components

//Home
import { HomeComponent } from './home/home.component'

import { HeaderComponent } from './header/header.component';

import { AboutusComponent } from './home/aboutus/aboutus.component'
import { ApplicationMaterialsComponent } from './home/application-materials/application-materials.component';
import { ProcessComponent } from './home/application-materials/process/process.component';

import { ApplicationTimelineComponent } from './home/application-timeline/application-timeline.component';

import { InthenewsComponent } from './home/inthenews/inthenews.component';
import { GrantsAwardedComponent } from './home/grants-awarded/grants-awarded.component';
import { GrantsByYearComponent } from './home/grants-awarded/grants-by-year/grants-by-year.component';
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
import { TypeNewPasswordComponent } from './login/reset-password-or-forgot-username/reset-password/type-new-password/type-new-password.component';
import { ForgotUsernameComponent } from './login/reset-password-or-forgot-username/forgot-username/forgot-username.component';

//user
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ChangeEmailComponent } from './user/change-email/change-email.component';

//organization
import { OrganizationComponent } from './organization/organization.component';

//test email component
import { EmailComponent } from './test/email/email.component';
import { UserOrganizationComponent } from './user/user-organization/user-organization.component';

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        //Home
        HomeComponent,
        AboutusComponent, ApplicationMaterialsComponent, ApplicationTimelineComponent,
        InthenewsComponent, FrequentlyAskedQuestionsComponent, ProcessComponent,
        GrantsAwardedComponent, GrantsByYearComponent,
        //login
        LoginComponent, RegisterComponent
        , ResetPasswordOrUsernameComponent,

        DirectorsMenuComponent,

        ResetPasswordComponent,
        TypeNewPasswordComponent,
        ForgotUsernameComponent,

        //user
        UserComponent, ChangePasswordComponent, ChangeEmailComponent,

        //organization
        OrganizationComponent,

        //letter of intent
        LetintmenuComponent, LetintComponent, LetintStatusComponent,

        //test component - email
        EmailComponent,

        UserOrganizationComponent,

    ],
    imports: [BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule,
        AppRoutingModule,

        FlexLayoutModule,

        //Material Design
        MatGridListModule, MatButtonModule, MatCheckboxModule, MatInputModule,
        MatSidenavModule, MatTabsModule, MatIconModule, MatToolbarModule, MatMenuModule,
        MatSnackBarModule, MatCardModule, MatDividerModule,

        ContentsModule, NgxPageScrollModule
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard, AuthService,
        GrantService, GrantApiService,
        ValidEmailService, ValidUserNameService, ValidResetCodeService,
        EmailService, ResetCodeService, SetNewPasswordService, GetUserService
    ]
})
export class AppModule { }
