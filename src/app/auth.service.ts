import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
  protected login_url: string = 'http://localhost/rest-it/public/api/authentification/login';
  protected register_url: string = 'http://localhost/rest-it/public/api/authentification/register';
  protected forgot_url: string = 'http://localhost/rest-it/public/api/authentification/verifymail';
  protected reset_url: string = 'http://localhost/rest-it/public/api/authentification/pw-reset';


  constructor(private http: HttpClient) { }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.login_url, user, httpOptions)
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.register_url, user, httpOptions)
  }

  forgot(user: User): Observable<User> {
    return this.http.post<User>(this.forgot_url, user, httpOptions)
  }

  reset(user: User): Observable<User> {
    return this.http.post<User>(this.reset_url, user, httpOptions)
  }



}
