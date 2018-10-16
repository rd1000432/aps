import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from './project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  protected create_project_url: string = 'http://localhost/rest-it/public/api/project-data/create-project';
  protected show_all_projects_url: string = 'http://localhost/rest-it/public/api/project-data/overview';
  protected show_single_project_url: string = 'http://localhost/rest-it/public/api/project-data/project';
  protected show_types_url: string = 'http://localhost/rest-it/public/api/project-data/get_types';
  private types: any;

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get('http://localhost/rest-it/public/api/project-data/get_types');
  }

  getSingleProject(id: string) {
    return this.http.get('http://localhost/rest-it/public/api/project-data/project/3');
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.create_project_url, project, httpOptions)
  }



}
