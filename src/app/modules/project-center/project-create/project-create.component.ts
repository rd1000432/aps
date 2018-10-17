import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectDataService } from 'src/app/project-data.service';
import { Type } from 'src/app/type';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})

export class ProjectCreateComponent implements OnInit {

  private types: any;
  private newProject = {};
  private tags: any;
  private headers = new HttpHeaders(); // headers for each request

  constructor(private http: HttpClient, private projectDataService: ProjectDataService) {
    // All necessarry headers for JSON requests
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.tags = new Array();
  }

  ngOnInit() {
    this.projectDataService.getTypes().subscribe((data: Type) => this.types = data);
  }

  createProject() {
    this.projectDataService.createProject(this.newProject).subscribe(result => {
      console.log(result);
    },
      error => {
        console.log("Project could not be created");
      }
    );
    this.tags = new Array();
    let temporaryTags = this.tags;

    $('.bootstrap-tagsinput .label-info').each(function() {
      temporaryTags.push($(this).text());
    });

    var fields = {};

    for (var i = 0; i < this.tags.length; i++) {
      var tag = this.tags[i];

      if (tag) {
        fields[i] = tag;
      }
    }
    console.log(fields);

    this.projectDataService.createTags(fields).subscribe(result => {
      console.log(result);
    },
      error => {
        console.log("Tag could not be created");
      }
    );

  }
}
