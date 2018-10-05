import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectSingleComponent } from './project-single/project-single.component';
import { ProjectCreateComponent } from './project-create/project-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProjectOverviewComponent,
    ProjectSingleComponent,
    ProjectCreateComponent
  ],
  declarations: [
    ProjectOverviewComponent,
    ProjectSingleComponent,
    ProjectCreateComponent
  ]
})
export class ProjectCenterModule { }

