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

  private products: any;
  private types: any;
  private brands: any;
  private books = [];
  private newProject = {};
  private oAuthURL = "http://localhost/oauth/token"; // Passport authentication URL
  private apiURL = "http://localhost/rest-it/public/api/create-project"; // API URL, defined in /routes/api.php in Laravel back-end
  private accessToken: any; // variable to store the access token
  private headers = new HttpHeaders(); // headers for each request


  private postData = {
    grant_type: "password",
    client_id: 4,   // the client ID generate before
    client_secret: "xbkIsCLcDSdPJ8bYVuCRIBDjwJN6LMJEsVcW6OGE",   // the client secret generated before
    username: "patrick@nh.at", // an User in Laravel database
    password: "test123" // the user's password
  }

  constructor(private http: HttpClient, private projectDataService: ProjectDataService) {
    // all headers for JSON requests
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  ngOnInit() {
    this.projectDataService.getTypes().subscribe((data: Type) => this.types = data);
  }


  createProject() {
    this.projectDataService.createProject(this.newProject).subscribe(result => {
      console.log(result);
    },
      error => {
        console.log("error");
      }
    );
  }

}
