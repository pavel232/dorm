import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public register(data: Login): void {
    this.http.post(`${this.url}/signup`, data).subscribe(resp => console.log('Response:\n', resp));
  }

  public logIn(data: Login) {
    this.http
      .post<Login>(`${this.url}/login`, data)
      .subscribe(resp => console.log('Response:\n', resp));
  }
}
