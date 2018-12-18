import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectDataService } from 'src/app/project-data.service';
import { Project } from 'src/app/project';


@Component({
  selector: 'app-commenter',
  templateUrl: './commenter.component.html',
  styleUrls: ['./commenter.component.css']
})
export class CommenterComponent implements OnInit {

  private id: any;
  private file_url: string = 'http://localhost/rest-it/public/api/project-data/files/';
  private comments: any;
  private comment: string;
  private commentadded: boolean = false;
  private commenttosend: {project_id:string, comment:string};

  constructor(private projectDataService: ProjectDataService, public sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute) {
    this.commenttosend = {project_id :"", comment:""};
    this.comments = [];

  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.file_url = this.file_url + this.id;
    this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => {this.comments = data; this.commentadded = true; });
  }

  addcomment(){
    this.commentadded = true;
    this.comments.push(this.comment); 
    this.commenttosend.project_id = this.id;
    this.commenttosend.comment = this.comment;
    this.projectDataService.createComment(this.commenttosend).subscribe(result => {
      console.log(result);
      this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => this.comments = data);
    },
      error => {
        console.log("Comment could not be created");
      }
    );
    this.comment = "";
    this.comments = [];
    
  }

  deletecomment($id){
    this.projectDataService.deleteComment($id).subscribe(result => {
      console.log(result);
      this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => this.comments = data);
    },
      error => {
        console.log("Comment could not be deleted");
      }
    );
  }

}
