import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectDataService } from 'src/app/project-data.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  private projects: any;

  constructor(private projectDataService: ProjectDataService, private http: HttpClient) { }

  ngOnInit() {
    this.projectDataService.getAllProjects().subscribe((data: Project) => this.projects = data);
  }



}
