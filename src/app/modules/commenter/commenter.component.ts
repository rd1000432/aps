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
  private commenttosend: { project_id: string, comment: string };

  constructor(private projectDataService: ProjectDataService, public sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute) {
    this.commenttosend = { project_id: "", comment: "" };
    this.comments = [];

  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.file_url = this.file_url + this.id;
    this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => { this.comments = data; this.commentadded = true; });
  }

  addcomment() {
    this.commentadded = true;
    if (this.commentadded === true) {
      document.body.style.cursor = "crosshair";

      $('#canv').on('click', function (e) { //Offset mouse Position
        var posX = $(this).offset().left,
          posY = $(this).offset().top;

        var d = document.createElement("input");
        d.style.position = "absolute";
        d.style.left = (e.pageX - posX + 150) + 'px';
        d.style.top = (e.pageY - posY + 150) + 'px';
        d.className = 'form-control';
        d.id = "comment-input";
        d.name = 'comment';
        d.placeholder = "...";
        d.type = 'text';
        d.style.width = "150px";

        var btn = document.createElement("button");
        btn.innerHTML = "<i class='fas fa-plus'></i>";
        btn.style.position = "absolute";
        btn.style.left = ((e.pageX - posX) + 320) + 'px';
        btn.style.top = (e.pageY - posY + 150) + 'px';
        btn.id = "addcomment";

        var id = this.id;
        var commenttosend = { project_id: "", comment: "" };
        var projectDataServices:ProjectDataService;
        btn.onclick = function () {
          commenttosend.project_id = id;
          commenttosend.comment = document.getElementById('comment-input').innerHTML;          
          projectDataServices.createComment(commenttosend).subscribe(result => {
            console.log(result);
          },
            error => {
              console.log("Comment could not be created");
            }
          );
        }

        $('#canv').append(d);
        $('#canv').append(btn);

        document.body.style.cursor = "default";

        $('#canv').off('click');
      });

    } else {
      $('#canv').click(function (e) {
        console.log("not");

      });
    }



    /*    this.commentadded = true;
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
       this.comments = []; */

  }

  sendcomment() {
    this.commenttosend.project_id = this.id;
    this.commenttosend.comment = document.getElementById('addcomment').innerHTML;
    this.projectDataService.createComment(this.commenttosend).subscribe(result => {
      console.log(result);
      this.projectDataService.getCommentsForProject(this.id).subscribe((data: Project) => this.comments = data);
    },
      error => {
        console.log("Comment could not be created");
      }
    );
    this.commenttosend.project_id = '';
    this.commenttosend.comment = '';
  }

  deletecomment($id) {
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
