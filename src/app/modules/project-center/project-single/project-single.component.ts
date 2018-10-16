import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectDataService } from 'src/app/project-data.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

  constructor(private http: HttpClient, private projectDataService: ProjectDataService) { }

  private projects: any;

  ngOnInit() {
    // let obs = this.http.get('http://localhost/rest-it/public/api/project-data/project/5');
    // obs.subscribe((response) => this.projects = response);

    this.projectDataService.getSingleProject("3").subscribe((data: Project) => this.projects = data);
  }

}
