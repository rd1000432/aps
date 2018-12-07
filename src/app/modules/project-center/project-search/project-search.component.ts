import { Component, OnInit } from '@angular/core';
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
  private results: boolean = false;
  private noresults: boolean = false;
  private invalidsearch: boolean = false;
  private counter: number = 0;

  constructor(private projectDataService: ProjectDataService, private router: Router) {
    this.searchresults = [];
  }

  ngOnInit() {
    this.projectDataService.getAllProjects().subscribe((data: Project) => this.projects = data);
  }
      

  search() {
    this.noresults = false;
    this.invalidsearch = false;
    this.searchresults = [];
    console.log(this.searchvalue);
    this.counter = 0;
    if (this.searchvalue != "" && this.searchvalue != null) {
      for (let project of this.projects) {        
        if (this.searchvalue == project.title) {
          console.log("Titel stimmt überein");
          this.searchresults.push(project);
          console.log(this.searchresults);
          this.results = true;
          this.counter++;
        } else if (this.searchvalue == project.id) {
          console.log("Nummer stimmt überein");
          this.searchresults.push(project);
          this.results = true;
          this.counter++;
        } else if (this.counter === 0) {
            console.log("Nichts gefunden");
            this.results = false;
            this.noresults = true;
          }
        }
      }
      else {
        this.results = false;
        this.invalidsearch = true;
      }
    }
  }

