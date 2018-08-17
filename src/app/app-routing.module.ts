import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderSideComponent } from "./header-side.component";
import { ManagementComponent } from "./management/management.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessageDetailComponent } from "./message-detail/message-detail.component";
import { MessageComposeComponent } from "./message-compose/message-compose.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { ChatComponent } from "./chat/chat.component";
import { SupportComponent } from "./support/support.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactGridComponent } from "./contact-grid/contact-grid.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { LoginComponent } from "./login/login.component";
import { SvgComponent } from "./svg/svg.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DataCenterComponent } from "./data-center/data-center.component";
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectSingleComponent } from './project-single/project-single.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { CommenterComponent } from "./commenter/commenter.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },

  // path: "",
  // component: HeaderSideComponent,
  // children: [
  {
    path: "",
    component: HeaderSideComponent,
    children: [

      { path: "home", component: MessagesComponent },
      { path: "management", component: ManagementComponent },
      { path: "svg", component: SvgComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "messages", component: MessagesComponent },
      { path: "message-detail", component: MessageDetailComponent },
      { path: "message-compose", component: MessageComposeComponent },
      { path: "calendar", component: CalendarComponent },
      { path: "chat", component: ChatComponent },
      { path: "support", component: SupportComponent },
      { path: "contacts", component: ContactsComponent },
      { path: "contact-grid", component: ContactGridComponent },
      { path: "contact-detail", component: ContactDetailComponent },
      { path: "data-center", component: DataCenterComponent },
      { path: "project-overview", component: ProjectOverviewComponent },
      { path: "project-single", component: ProjectSingleComponent },
      { path: "project-single/:id", component: ProjectSingleComponent },
      { path: "project-create", component: ProjectCreateComponent },
      { path: "commenter", component: CommenterComponent }

    ]
  }
  // { path: "home", component: MessagesComponent },
  // { path: "management", component: ManagementComponent },
  // { path: "login", component: LoginComponent }
  // ]
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
