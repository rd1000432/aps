import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

    constructor(private http: HttpClient) { }

    private products:any;
    private brands:any;

    ngOnInit() {
      let obs = this.http.get('http://localhost/rest-it/public/api/product-infos');
      obs.subscribe((response)=> this.products = response);

      let obs1 = this.http.get('http://localhost/rest-it/public/api/brand-infos');
      obs1.subscribe((response)=> this.brands = response);

      const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
        })
          .subscribe(
            res => {
              console.log(res);
            },
            err => {
              console.log("Error occured");
            }
          );



    }


}
