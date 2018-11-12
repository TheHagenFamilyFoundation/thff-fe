import { NgModule, InjectionToken } from '@angular/core'
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';

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
import { TypeNewPasswordComponent } from './login/reset-password-or-forgot-username/reset-password/type-new-password/type-new-password.component';

//letter of intent
import { LetterOfIntentComponent } from './letter-of-intent/letter-of-intent.component';
import { CreateLetterOfIntentFullComponent } from './letter-of-intent/create-letter-of-intent-full/create-letter-of-intent-full.component';

//full proposal
import { FullProposalComponent } from './full-proposal/full-proposal.component';
import { CreateFullProposalFullComponent } from './full-proposal/create-full-proposal-full/create-full-proposal-full.component';

//user
import { UserComponent } from './user/user.component';

import { DirectorsMenuComponent } from './director/directors-menu/directors-menu.component';
import { DirectorViewOrganizationComponent } from './director/director-organizations/director-view-organization/director-view-organization.component';
import { DirectorOrgViewLetterOfIntentComponent } from './director/director-organizations/director-view-organization/director-view-organization-lois/director-org-view-letter-of-intent/director-org-view-letter-of-intent.component';

//organization
import { OrganizationComponent } from './organization/organization.component';

import { CreateOrganizationFullComponent } from './organization/create-organization-full/create-organization-full.component';

import { ViewOrganizationsComponent } from './organization/view-organizations/view-organizations.component';

//testing the email
import { EmailComponent } from './test/email/email.component';

//Utility
import { NotFoundComponent } from './utilities/not-found/not-found.component';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    //login
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset-password-or-username', component: ResetPasswordOrUsernameComponent },
    { path: 'type-new-password/:username/:resetCode', component: TypeNewPasswordComponent },

    { path: 'about', component: AboutusComponent },
    { path: 'application-materials', component: ApplicationMaterialsComponent },
    { path: 'process', component: ProcessComponent },

    { path: 'application-timeline', component: ApplicationTimelineComponent },

    { path: 'inthenews', component: InthenewsComponent },
    //child routes

    { path: 'grants-awarded', component: GrantsAwardedComponent },
    { path: 'frequently-asked-questions', component: FrequentlyAskedQuestionsComponent },

    { path: 'user', component: UserComponent, canActivate: [AuthGuard] },

    { path: 'organization/:id', component: OrganizationComponent, canActivate: [AuthGuard] },
    { path: 'create-organization/:name', component: CreateOrganizationFullComponent, canActivate: [AuthGuard] },
    { path: 'view-organizations', component: ViewOrganizationsComponent, canActivate: [AuthGuard] },

    //Letter of Intent
    { path: 'loi/:id', component: LetterOfIntentComponent, canActivate: [AuthGuard] },
    { path: 'create-loi-full', component: CreateLetterOfIntentFullComponent, canActivate: [AuthGuard] },

    //Full Proposal
    { path: 'fp/:id', component: FullProposalComponent, canActivate: [AuthGuard] },
    { path: 'create-fp-full', component: CreateFullProposalFullComponent, canActivate: [AuthGuard] },
    { path: 'create-fp-full/:loiID', component: CreateFullProposalFullComponent, canActivate: [AuthGuard] },

    { path: 'director', component: DirectorsMenuComponent, canActivate: [AuthGuard] },
    { path: 'director-organization/:id', component: DirectorViewOrganizationComponent, canActivate: [AuthGuard] },
    { path: 'director-loi/:id', component: DirectorOrgViewLetterOfIntentComponent, canActivate: [AuthGuard] },

    {
        path: 'externalRedirect',
        resolve: {
            url: externalUrlProvider,
        },
        // We need a component here because we cannot define the route otherwise
        component: NotFoundComponent,
    },

    { path: 'email', component: EmailComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        {
            provide: externalUrlProvider,
            useValue: (route: ActivatedRouteSnapshot) => {
                const externalUrl = route.paramMap.get('externalUrl');
                window.open(externalUrl, '_self');
            },
        },
    ]


})

export class AppRoutingModule { }