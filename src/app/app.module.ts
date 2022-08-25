import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { AboutComponent } from './about/about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserClaimsListComponent } from './user-claims-list/user-claims-list.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthGuard } from './auth/auth.guard';
import { SignOutComponent } from './user/sign-out/sign-out.component';
import { PreAuthListComponent } from './claims/pre-auth-list/pre-auth-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PreAuthDetailsComponent } from './claims/pre-auth-details/pre-auth-details.component';
import { DragDropListComponent } from './drag-drop-list/drag-drop-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AboutComponent,
    UserClaimsListComponent,
    SignOutComponent,
    PreAuthListComponent,
    PagenotfoundComponent,
    LandingPageComponent,
    PreAuthDetailsComponent,
    DragDropListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AgGridModule.withComponents(null),
    MatPaginatorModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [UserService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }


