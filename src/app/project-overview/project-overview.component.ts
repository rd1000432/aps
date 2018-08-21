import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private projects:any;

  ngOnInit() {
    let obs = this.http.get('http://localhost/rest-it/public/api/overview');
    obs.subscribe((response)=> this.projects = response);

  }

}
