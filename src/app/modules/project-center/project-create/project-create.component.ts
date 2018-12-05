import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ProjectDataService } from 'src/app/project-data.service';
import { Type } from 'src/app/type';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})

export class ProjectCreateComponent implements OnInit {

  private types: any;
  private newProject: any;
  private tags: any;
  private newtypename: any;
  private placeholder_for_dropdown: any;
  private fieldreq: string = "Dieses Feld ist notwendig.";

  constructor(private projectDataService: ProjectDataService, private router: Router) {
    this.tags = new Array();
    this.newProject = { tags: {} };
  }

  ngOnInit() {
    this.projectDataService.getTypes().subscribe((data: Type) => this.types = data);
  }

  createProject() {
    console.log(this.newProject.type_id);
    if (this.newProject.title != undefined && this.newProject.init_date != undefined && this.newProject.end_date != undefined
      && this.newProject.manager != undefined && this.newProject.type_id != undefined && this.newProject.init_date != "" && this.newProject.end_date != "") {
      console.log("works");
      console.log(this.newProject.end_date);

      // Tags-Logik
      if ($('.bootstrap-tagsinput').find('.label-info').length !== 0) {

        this.tags = new Array();
        let temporaryTags = this.tags;

        $('.bootstrap-tagsinput .label-info').each(function() {
          temporaryTags.push($(this).text());
        });

        var fields = {};

        for (var i = 0; i < this.tags.length; i++) {

          var tag = this.tags[i];
          if (tag) {
            fields[i] = tag;
          }
        }
        this.newProject.tags = fields;
      }
      // Bestehender Typ oder neuer Typ

      if (this.newProject.type_id === "---Neuen Projekt-Typen anlegen---") {
        this.newtypename = (this.newtypename.substring(0, 1).toUpperCase() + this.newtypename.substring(1, this.newtypename.length).toLowerCase());
        for (let type of this.types) {
          if (type.name === this.newtypename) {
            this.newProject.type_id = type.id;
            break;
          } else {
            this.newProject.type_id = 2000000000; //2 Millarden --> Typ ist noch nicht vorhanden, Laravel weis --> neuen Typen anlegen
            this.newProject.newtype = this.newtypename;
          }
        }
      }

      // Projekt absenden
      this.projectDataService.createProject(this.newProject).subscribe(result => {
        console.log(result);
        this.router.navigate(['/project/project-single/' + result['success']]);
      },
        error => {
          console.log("Project could not be created");
        }
      );
    } else {
      console.log("field is missing");
    }
  }
}
