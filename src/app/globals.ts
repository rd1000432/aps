import { Injectable } from "@angular/core";


@Injectable()
export class Globals {
  project_base_url:string = 'http://localhost/rest-it/public/api/project-data/';
  auth_base_url:string = 'http://localhost/rest-it/public/api/authentification/';
}