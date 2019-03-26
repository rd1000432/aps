import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
  project_base_url:string = environment.apiUrl + '/api/project-data/';
  auth_base_url:string = environment.apiUrl + '/api/authentification/';
}