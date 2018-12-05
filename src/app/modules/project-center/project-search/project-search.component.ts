import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Project } from 'src/app/project';

import { ProjectDataService } from 'src/app/project-data.service';
@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit {

  private projects: any;
  private searchresults: any;
  private searchvalue: any;
  private results: boolean = true;

  constructor(private projectDataService: ProjectDataService, private router: Router) {
    this.searchresults = [];
  }

  ngOnInit() {
    this.projectDataService.getAllProjects().subscribe((data: Project) => this.projects = data);
  }
      

  search() {
    this.searchresults = [];
    console.log(this.searchvalue);
    if (this.searchvalue != "") {
      for (let project of this.projects) {
        if (this.searchvalue == project.title) {
          console.log("Titel stimmt überein");
          this.searchresults.push(project);
          console.log(this.searchresults);
          this.results = false;

        } else if (this.searchvalue == project.id) {
          console.log("Nummer stimmt überein");
          this.searchresults.push(project);
          this.results = false;
        } else {
          console.log("Nichts gefunden");
        }
      }
    }
  }
}
