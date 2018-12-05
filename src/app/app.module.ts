import { BrowserModule } from "@angular/platform-browser";
import * as $ from 'jquery';
import { NgModule } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ChartsModule } from "ng2-charts";

import { AppComponent } from "./app.component";

import { HeaderComponent } from "./shared/components/header/header.component";

import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DataCenterComponent } from './modules/settings/data-center/data-center.component';

import { ProjectCenterModule } from './modules/project-center/project-center.module';
//import { CommenterComponent } from './modules/commenter/commenter.component';

import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { LoginComponent } from "./modules/authentication/login/login.component";
import { VerifyComponent } from './modules/authentication/verify/verify.component';
import { ForgotComponent } from './modules/authentication/forgot/forgot.component';
import { PWResetComponent } from './modules/authentication/pwreset/pwreset.component';

import { AuthService } from './auth.service';
import { CheckmailComponent } from './modules/authentication/checkmail/checkmail.component';
import { CheckverificationmailComponent } from './modules/authentication/checkverificationmail/checkverificationmail.component';
import { DialogComponentComponent } from './modules/dialog-component/dialog-component.component';

@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    DataCenterComponent,
    AuthenticationComponent,
    RegisterComponent,
    VerifyComponent,
    ForgotComponent,
    PWResetComponent,
    CheckmailComponent,
    CheckverificationmailComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MorrisJsModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ProjectCenterModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
