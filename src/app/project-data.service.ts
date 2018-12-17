import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'image/png'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  protected create_project_url: string = 'http://localhost/rest-it/public/api/project-data/create-project';
  protected delete_project_url: string = 'http://localhost/rest-it/public/api/project-data/delete-project';
  protected create_tag_url: string = 'http://localhost/rest-it/public/api/project-data/create-tag';
  protected upload_file_url: string = 'http://localhost/rest-it/public/api/project-data/upload-file';
  protected show_all_projects_url: string = 'http://localhost/rest-it/public/api/project-data/overview';
  protected show_single_project_url: string = 'http://localhost/rest-it/public/api/project-data/project/';
  protected show_types_url: string = 'http://localhost/rest-it/public/api/project-data/get_types';
  protected get_tags_url: string = 'http://localhost/rest-it/public/api/project-data/tags/';
  protected get_files_url: string = 'http://localhost/rest-it/public/api/project-data/files/';

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get(this.show_types_url);
  }

  getSingleProject($id) {
    return this.http.get(this.show_single_project_url + $id);
  }

  getSingleTags($id) {
    return this.http.get(this.get_tags_url + $id);
  }

  getFiles($id) {
    return this.http.get(this.get_files_url + $id, httpOptions2);
  }

  getAllProjects() {
    return this.http.get(this.show_all_projects_url);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.create_project_url, project, httpOptions)
  }


  uploadFile(formData: any) {
    return this.http.post(this.upload_file_url, formData)
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.delete_project_url, project, httpOptions)
  }

  createTags(project: Project): Observable<Project> {
    return this.http.post<Project>(this.create_tag_url, project, httpOptions)
  }


}
