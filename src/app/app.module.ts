import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
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
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { FlexLayoutModule } from "@angular/flex-layout";

import { ContentsModule } from 'angular-contents';
import { NgxPageScrollModule } from 'ngx-page-scroll';

//guards
import { AuthGuard } from './_guards/auth.guard';

//services
//inside auth
import { AuthService } from './auth/auth.service';
import { LoginService } from './services/user/login.service';
import { GetCSRFTokenService } from './services/auth/get-csrf-token.service';

import { GrantService } from './services/grants/grant.service';
import { GrantApiService } from './services/grants/grant-api.service';

import { ValidEmailService } from './services/user/valid-email.service';
import { ValidUserNameService } from './services/user/valid-username.service';
import { ValidResetCodeService } from './services/user/valid-resetcode.service';
import { SetNewPasswordService } from './services/user/set-new-password.service';
import { GetUserService } from './services/user/get-user.service';
import { ChangePasswordService } from './services/user/change-password.service';
import { ChangeEmailService } from './services/user/change-email.service';

import { InOrgService } from './services/user/in-org.service';

import { GetOrganizationService } from './services/organization/get-organization.service';
import { CreateOrganizationService } from './services/organization/create-organization.service';

import { GetLoiService } from './services/loi/get-loi.service';
import { CreateLoiService } from './services/loi/create-loi.service';

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

//letter of intent
import { LetterOfIntentComponent } from './letter-of-intent/letter-of-intent.component';
import { CreateLetterOfIntentComponent } from './letter-of-intent/create-letter-of-intent/create-letter-of-intent.component';
import { LetintmenuComponent } from './letintmenu/letintmenu.component';

import { LetintComponent } from './letintmenu/letint/letint.component';
import { LetintStatusComponent } from './letintmenu/letint-status/letint-status.component';

import { DirectorsMenuComponent } from './directors-menu/directors-menu.component';

import { ResetPasswordComponent } from './login/reset-password-or-forgot-username/reset-password/reset-password.component';
import { TypeNewPasswordComponent } from './login/reset-password-or-forgot-username/reset-password/type-new-password/type-new-password.component';
import { ForgotUsernameComponent } from './login/reset-password-or-forgot-username/forgot-username/forgot-username.component';

//user
import { UserComponent } from './user/user.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { ChangeEmailComponent } from './user/change-email/change-email.component';
import { UserOrganizationComponent } from './user/user-organization/user-organization.component';
import { SelectedOrganizationComponent } from './user/user-organization/selected-organization/selected-organization.component';

import { UserLetterOfIntentComponent } from './user/user-letter-of-intent/user-letter-of-intent.component';
import { SelectedLetterOfIntentComponent } from './user/user-letter-of-intent/selected-letter-of-intent/selected-letter-of-intent.component';

//organization
import { OrganizationComponent } from './organization/organization.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { OrganizationInfoComponent } from './organization/organization-info/organization-info.component';
import { OrganizationUsersComponent } from './organization/organization-users/organization-users.component';
import { OrganizationRequestsComponent } from './organization/organization-requests/organization-requests.component';

//test email component
import { EmailComponent } from './test/email/email.component';

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
        UserOrganizationComponent, SelectedOrganizationComponent,
        UserLetterOfIntentComponent, SelectedLetterOfIntentComponent,

        //organization
        OrganizationComponent, CreateOrganizationComponent, 
        OrganizationUsersComponent, OrganizationRequestsComponent,
        OrganizationInfoComponent,

        //letter of intent
        LetintmenuComponent, LetintComponent, LetintStatusComponent,
        LetterOfIntentComponent,
        CreateLetterOfIntentComponent,

        //test component - email
        EmailComponent,

    ],
    imports: [BrowserModule,
        HttpClientModule, HttpClientXsrfModule.withOptions({
            cookieName: 'xsrf-token',
            headerName: 'x-csrf-token',
        }),

        FormsModule, BrowserAnimationsModule,
        AppRoutingModule,

        FlexLayoutModule,

        //Material Design
        MatGridListModule, MatButtonModule, MatCheckboxModule, MatInputModule,
        MatSidenavModule, MatTabsModule, MatIconModule, MatToolbarModule, MatMenuModule,
        MatSnackBarModule, MatCardModule, MatDividerModule, MatTableModule, MatFormFieldModule,
        MatPaginatorModule, MatDialogModule, MatSelectModule,

        ContentsModule, NgxPageScrollModule
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard, AuthService, LoginService, GetCSRFTokenService,
        GrantService, GrantApiService,
        ValidEmailService, ValidUserNameService, ValidResetCodeService,
        EmailService, ResetCodeService, SetNewPasswordService, GetUserService, ChangePasswordService, ChangeEmailService,
        InOrgService,
        GetOrganizationService, CreateOrganizationService,
        GetLoiService, CreateLoiService
    ],
    entryComponents: [CreateOrganizationComponent, SelectedOrganizationComponent,
        CreateLetterOfIntentComponent, SelectedLetterOfIntentComponent]
})
export class AppModule { }
