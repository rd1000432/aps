import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MorrisJsModule } from "angular-morris-js";
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ChartsModule } from "ng2-charts";
import { HeaderSideComponent } from "./header-side.component";
import { ManagementComponent } from "./management/management.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageComposeComponent } from './message-compose/message-compose.component';
import { LoginComponent } from "./login/login.component";
import { SvgComponent } from "./svg/svg.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { SupportComponent } from './support/support.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactGridComponent } from './contact-grid/contact-grid.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { DataCenterComponent } from './data-center/data-center.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectSingleComponent } from './project-single/project-single.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { CommenterComponent } from './commenter/commenter.component';


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    HeaderSideComponent,
    ManagementComponent,
    MessagesComponent,
    SvgComponent,
    DashboardComponent,
    MessageDetailComponent,
    MessageComposeComponent,
    CalendarComponent,
    ChatComponent,
    SupportComponent,
    ContactsComponent,
    ContactGridComponent,
    ContactDetailComponent,
    DataCenterComponent,
    ProjectOverviewComponent,
    ProjectSingleComponent,
    ProjectCreateComponent,
    CommenterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    MorrisJsModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
