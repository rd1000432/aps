import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let obs = this.http.get('http://localhost/rest-it/public/api/project/2');
    obs.subscribe((response)=> console.log(response)); 
  }

}
