import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { UserClaimsListComponent } from './user-claims-list/user-claims-list.component';
import { AuthGuard } from './auth/auth.guard';
import { SignOutComponent } from './user/sign-out/sign-out.component';
import { PreAuthListComponent } from './claims/pre-auth-list/pre-auth-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PreAuthDetailsComponent } from './claims/pre-auth-details/pre-auth-details.component';
import { DragDropListComponent } from './drag-drop-list/drag-drop-list.component';

export const appRoutes: Routes = [
    {
        path: 'home', component: LandingPageComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: HomeComponent }]
    },
    {
        path: 'about', component: LandingPageComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: AboutComponent }]
    },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'claimsList', component: LandingPageComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: UserClaimsListComponent }]
    },
    {
        path: 'signout', component: UserComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: SignOutComponent }]
    },
    {
        path: 'preauthList', component: LandingPageComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: PreAuthListComponent }]
    },
    {
        path: 'preauthDetails', component: LandingPageComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: PreAuthDetailsComponent }]
    },
    {
        path: 'dragdrop',  component: LandingPageComponent,  
        children: [{ path: '', component: DragDropListComponent }]
    } ,
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: '**',  component: LandingPageComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: PagenotfoundComponent }]
    } 

];
