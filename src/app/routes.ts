import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { UserClaimsListComponent } from './user-claims-list/user-claims-list.component';
import { AuthGuard } from './auth/auth.guard';
import { SignOutComponent } from './user/sign-out/sign-out.component';

export const appRoutes: Routes = [
    {
        path: 'home', component: UserComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: HomeComponent }]
    },
    {
        path: 'about', component: UserComponent, canActivate: [AuthGuard],
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
        path: 'claimsList', component: UserComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: UserClaimsListComponent }]
    },
    {
        path: 'signout', component: SignOutComponent, canActivate: [AuthGuard],
        children: [{ path: '', component: SignOutComponent }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }

];
