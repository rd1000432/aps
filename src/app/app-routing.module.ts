import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";

import { LoginComponent } from "./modules/authentication/login/login.component";

import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { DataCenterComponent } from "./modules/settings/data-center/data-center.component";
import { ProjectOverviewComponent } from './modules/project-center/project-overview/project-overview.component';
import { ProjectSingleComponent } from './modules/project-center/project-single/project-single.component';
import { ProjectCreateComponent } from './modules/project-center/project-create/project-create.component';
import { CommenterComponent } from "./modules/commenter/commenter.component";

const appRoutes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "",
    component: HeaderComponent,
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
