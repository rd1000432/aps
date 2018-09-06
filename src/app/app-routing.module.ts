import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderSideComponent } from "./header-side.component";

import { LoginComponent } from "./authentication/login/login.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DataCenterComponent } from "./data-center/data-center.component";
import { ProjectOverviewComponent } from './project-center/project-overview/project-overview.component';
import { ProjectSingleComponent } from './project-center/project-single/project-single.component';
import { ProjectCreateComponent } from './project-center/project-create/project-create.component';
import { CommenterComponent } from "./commenter/commenter.component";

const appRoutes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "",
    component: HeaderSideComponent,
    children: [

      { path: "dashboard", component: DashboardComponent },
      { path: "data-center", component: DataCenterComponent },
      { path: "project-overview", component: ProjectOverviewComponent },
      { path: "project-single", component: ProjectSingleComponent },
      { path: "project-single/:id", component: ProjectSingleComponent },
      { path: "project-create", component: ProjectCreateComponent },
      { path: "commenter", component: CommenterComponent }

    ]
  }
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
