import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProjectDataService } from 'src/app/project-data.service';
import { Project } from 'src/app/project';
import { Type } from 'src/app/type';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.css']
})
export class ProjectSingleComponent implements OnInit {

  private projects: any;
  private types: any;
  private tags: any;
  private id: any;
  private edit: boolean = true;

  constructor(private projectDataService: ProjectDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.projectDataService.getSingleProject(this.id).subscribe((data: Project) => this.projects = data);
    this.projectDataService.getSingleTags(this.id).subscribe((data: Project) => this.tags = data);
    this.projectDataService.getTypes().subscribe((data: Type) => this.types = data);
  }

  toggle() {
    this.edit = !this.edit;
  }


  delete() {
    this.projectDataService.deleteProject({ 'id': this.id }).subscribe(result => {
      console.log(result);
      this.router.navigate(['/project/project-overview']);
    },
      error => {
        console.log("Project could not be deleted");
      }
    );
  }

  upload(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file);
      this.projectDataService.uploadFile(formData).subscribe(result => {
        console.log(result);
        this.router.navigate(['/project/project-overview']);
      },
        error => {
          console.log("Datei konnte nicht hochgeladen werden!");
        }
      );
    }
  }

}
