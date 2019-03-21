import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //protected auth_base_url:string = 'https://approve-api.azurewebsites.net/api/authentification/';
  protected auth_base_url:string = 'http://localhost/approve-it-api/public/api/authentification/';
  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.auth_base_url+"login", user, httpOptions)
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.auth_base_url+"register", user, httpOptions)
  }

  forgot(user: User): Observable<User> {
    return this.http.post<User>(this.auth_base_url+"forgot", user, httpOptions)
  }

  reset(user: User): Observable<User> {
    return this.http.post<User>(this.auth_base_url+"passwordReset", user, httpOptions)
  }
}
