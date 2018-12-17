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
  private tags: any;
  private types: any;
  private id: any;
  private edit: boolean = true;
  private file: any;
  private filesToUpload: Array<File> = [];
  private pdfsrc: any;
  private get_files_url: string = 'http://localhost/rest-it/public/api/project-data/files/';

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


  uploadFile() {
    /*     $(function () {
          var $el = $('#input-file-now');
          $el.wrap('<form>').closest('form').get(0).reset();
          $el.unwrap();
        }); */

    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);

      formData.append("pdf", files[i]);
      formData.append("name", files[i]['name']);
      formData.append("id", this.id);
    }
    this.projectDataService.uploadFile(formData).subscribe(result => {
      console.log(result);
    }
    );
    window.location.reload();


  }

  cacheFile(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  downloadfile() {
  /*   this.projectDataService.getFiles(this.id).subscribe(
    ); */

    this.get_files_url = this.get_files_url + this.id;    
    /* window.location.href = this.get_files_url; */
    window.open(this.get_files_url);
  }

}
