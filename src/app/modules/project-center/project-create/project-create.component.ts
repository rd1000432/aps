import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Injectable } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

    private products:any;
    private brands:any;
    private books = [];
    private newProject = {};
    private oAuthURL = "http://localhost/oauth/token"; // Passport authentication URL
    private apiURL = "http://localhost/rest-it/public/api/create-project"; // API URL, defined in /routes/api.php in Laravel back-end
    private accessToken:any; // variable to store the access token
    private headers = new HttpHeaders(); // headers for each request
    private options = new RequestOptions({ Headers: this.headers });

    private postData = {
      grant_type: "password",
      client_id: 4,   // the client ID generate before
      client_secret: "xbkIsCLcDSdPJ8bYVuCRIBDjwJN6LMJEsVcW6OGE",   // the client secret generated before
      username: "patrick@nh.at", // an User in Laravel database
      password: "test123" // the user's password
    }

    constructor(private http: HttpClient) {
        // all headers for JSON requests
       this.headers.append('Content-Type', 'application/json');
       this.headers.append('Accept', 'application/json');
     }

    ngOnInit() {
      let obs = this.http.get('http://localhost/rest-it/public/api/product-infos');
      obs.subscribe((response)=> this.products = response);

      let obs1 = this.http.get('http://localhost/rest-it/public/api/brand-infos');
      obs1.subscribe((response)=> this.brands = response);

       let obs2 = this.http.get('http://localhost/rest-it/public/api/csrf');
       obs2.subscribe((response) => this.accessToken = response);


      // const headers = new HttpHeaders({ 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')});
      // const req = this.http.post('http://localhost/rest-it/public/api/create-project', {
      //  headers: this.headers,
      // "init_date" : "2018-08-14 17:08:25",
      // "title" : "asdfg",
      // "description" : "asdfg",
      // "img_url" : "sadfghj",
      // "organisation_id" : "1",
      // "brand_id" : "1",
      // "product_id" : "1"
      //   }).subscribe(
      //       res => {
      //         console.log(res);
      //       },
      //       err => {
      //         console.log("Error occured");
      //       }
      //     );
       // this.getToken()
       // .subscribe(data => {
       //    // set headers with Bearer token and save the token to access_token
       //    this.setToken(data);
       //  });
    }

    // getToken() {
    //    return this.http.post(this.oAuthURL, this.postData, this.headers).pipe(map(response => response.json().access_token));
    //  }
    //
    //  setToken(token) {
    //    this.headers.append('Authorization', 'Bearer ' + token); // add the Authentication header
    //    this.accessToken = token;  // save the access_token
    //  }
    //
    //  getBooks() {
    //    return this.http.get(this.apiURL, this.options)
    //               .pipe(map(response => response.json()));
    //  }
    //
    //
    // addBook() {
    //   this.http.post(this.apiURL, JSON.stringify(this.newProject), this.options)
    //            .subscribe(data => {
    //               this.getBooks()
    //                   .subscribe(data => this.books = data);
    //   });
    // }


}
