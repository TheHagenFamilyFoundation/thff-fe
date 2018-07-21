import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import 'hammerjs';

import { AppRoutingModule } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatGridListModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
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
import { MatDatepickerModule } from '@angular/material/datepicker';

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
import { ResetCodeService } from './services/user/reset-code.service';

import { InOrgService } from './services/user/in-org.service';
import { DirectorService } from './services/user/director.service';

//Organization
import { GetOrganizationService } from './services/organization/get-organization.service';
import { CreateOrganizationService } from './services/organization/create-organization.service';
//org Info
import { CreateOrganizationInfoService } from './services/organization/organization-info/create-organization-info.service';
import { GetOrganizationInfoService } from './services/organization/organization-info/get-organization-info.service';
import { DeleteOrganizationInfoService } from './services/organization/organization-info/delete-organization-info.service';

import { Upload501c3Service } from './services/organization/501c3/upload-501c3.service'; //upload the file
import { Create501c3Service } from './services/organization/501c3/create-501c3.service'; //create the object in the mongo db that contains the url
import { Get501c3Service } from './services/organization/501c3/get-501c3.service';
import { Delete501c3Service } from './services/organization/501c3/delete-501c3.service'; //for updating the 501c3 if there are any changes

import { AddUserService } from './services/organization/add-user.service';

//LOI
import { GetLoiService } from './services/loi/get-loi.service';
import { CreateLoiService } from './services/loi/create-loi.service';
import { LOIStatusService } from './services/loi/loi-status.service';

//loiInfo
import { CreateLoiInfoService } from './services/loi/loi-info/create-loi-info.service';
import { GetLoiInfoService } from './services/loi/loi-info/get-loi-info.service';
import { DeleteLoiInfoService } from './services/loi/loi-info/delete-loi-info.service';

import { EmailService } from './services/user/email.service';

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

import { CreateLetterOfIntentFullComponent } from './letter-of-intent/create-letter-of-intent-full/create-letter-of-intent-full.component';

import { LetterOfIntentInfoComponent } from './letter-of-intent/letter-of-intent-info/letter-of-intent-info.component';
import { LetterOfIntentStatusComponent } from './letter-of-intent/letter-of-intent-status/letter-of-intent-status.component';

import { LetintmenuComponent } from './letintmenu/letintmenu.component';

import { LetintComponent } from './letintmenu/letint/letint.component';
import { LetintStatusComponent } from './letintmenu/letint-status/letint-status.component';
import { LetterOfIntentSubmitComponent } from './letter-of-intent/letter-of-intent-submit/letter-of-intent-submit.component';
import { LetterOfIntentSubmitCheckComponent } from './letter-of-intent/letter-of-intent-submit-check/letter-of-intent-submit-check.component';

//director
import { DirectorsMenuComponent } from './director/directors-menu/directors-menu.component';
import { DirectorOrganizationsComponent } from './director/director-organizations/director-organizations.component';
import { DirectorViewOrganizationComponent } from './director/director-organizations/director-view-organization/director-view-organization.component';
import { DirectorSelectedOrganizationComponent } from './director/director-organizations/director-selected-organization/director-selected-organization.component';

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

import { ViewOrganizationsComponent } from './organization/view-organizations/view-organizations.component';

import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { CreateOrganizationFullComponent } from './organization/create-organization-full/create-organization-full.component';
import { CreateOrganizationHeaderComponent } from './organization/create-organization-header/create-organization-header.component';

import { OrganizationInfoComponent } from './organization/organization-info/organization-info.component';

//organization users
import { OrganizationUsersComponent } from './organization/organization-users/organization-users.component';
import { AddUsersComponent } from './organization/organization-users/add-users/add-users.component';

//organization loi
import { OrganizationRequestsComponent } from './organization/organization-requests/organization-requests.component';
import { OrgSelectedLetterOfIntentComponent } from './organization/org-selected-letter-of-intent/org-selected-letter-of-intent.component';

//organization 501c3
import { OrganizationDoc501c3Component } from './organization/organization-doc501c3/organization-doc501c3.component';
import { DeleteDoc501c3CheckComponent } from './organization/organization-doc501c3/delete-doc501c3-check/delete-doc501c3-check.component';

//test email component
import { EmailComponent } from './test/email/email.component';

//Utility
import { NotFoundComponent } from './utilities/not-found/not-found.component';

@NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        //Home
        HomeComponent,
        AboutusComponent, ApplicationMaterialsComponent, ApplicationTimelineComponent,
        InthenewsComponent, FrequentlyAskedQuestionsComponent, ProcessComponent,
        GrantsAwardedComponent, GrantsByYearComponent,
        //login
        LoginComponent, RegisterComponent, ResetPasswordOrUsernameComponent,

        //Director
        DirectorsMenuComponent,
        DirectorOrganizationsComponent,
        DirectorViewOrganizationComponent, DirectorSelectedOrganizationComponent,

        ResetPasswordComponent,
        TypeNewPasswordComponent,
        ForgotUsernameComponent,

        //user
        UserComponent, ChangePasswordComponent, ChangeEmailComponent,
        UserOrganizationComponent, SelectedOrganizationComponent,
        UserLetterOfIntentComponent, SelectedLetterOfIntentComponent,

        //organization
        OrganizationComponent,
        ViewOrganizationsComponent,
        CreateOrganizationComponent,
        CreateOrganizationFullComponent,
        CreateOrganizationHeaderComponent,

        OrganizationUsersComponent, AddUsersComponent,
        OrganizationRequestsComponent, OrgSelectedLetterOfIntentComponent,
        OrganizationInfoComponent, OrganizationDoc501c3Component,
        DeleteDoc501c3CheckComponent,

        //letter of intent
        LetintmenuComponent, LetintComponent, LetintStatusComponent,
        LetterOfIntentComponent,
        CreateLetterOfIntentComponent,
        CreateLetterOfIntentFullComponent,
        LetterOfIntentInfoComponent,
        LetterOfIntentStatusComponent,
        LetterOfIntentSubmitComponent,
        LetterOfIntentSubmitCheckComponent,

        //test component - email
        EmailComponent,

        NotFoundComponent,

    ],
    imports: [BrowserModule,
        HttpClientModule, HttpClientXsrfModule.withOptions({
            cookieName: 'xsrf-token',
            headerName: 'x-csrf-token',
        }),

        FormsModule, BrowserAnimationsModule,
        AppRoutingModule, ReactiveFormsModule,

        FlexLayoutModule,

        //Material Design
        MatGridListModule, MatButtonModule, MatCheckboxModule, MatInputModule,
        MatSidenavModule, MatTabsModule, MatIconModule, MatToolbarModule, MatMenuModule,
        MatSnackBarModule, MatCardModule, MatDividerModule, MatTableModule, MatFormFieldModule,
        MatPaginatorModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule,

        ContentsModule, NgxPageScrollModule
    ],
    bootstrap: [AppComponent],
    providers: [
        AuthGuard, AuthService, LoginService, GetCSRFTokenService,
        GrantService, GrantApiService,
        ValidEmailService, ValidUserNameService, ValidResetCodeService,
        EmailService, ResetCodeService, SetNewPasswordService, GetUserService, ChangePasswordService, ChangeEmailService,
        InOrgService, DirectorService,
        GetOrganizationService, CreateOrganizationService, AddUserService,
        CreateOrganizationInfoService, GetOrganizationInfoService, DeleteOrganizationInfoService,
        Upload501c3Service, Create501c3Service, Get501c3Service, Delete501c3Service,
        GetLoiService, CreateLoiService, LOIStatusService,
        CreateLoiInfoService, GetLoiInfoService, DeleteLoiInfoService,
    ],
    entryComponents: [
        CreateOrganizationComponent, CreateOrganizationHeaderComponent,
        SelectedOrganizationComponent, DirectorSelectedOrganizationComponent,
        AddUsersComponent,
        CreateLetterOfIntentComponent, SelectedLetterOfIntentComponent,
        OrgSelectedLetterOfIntentComponent, LetterOfIntentSubmitCheckComponent, DeleteDoc501c3CheckComponent
    ]
})
export class AppModule { }
