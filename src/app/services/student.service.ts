import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student.model';
import { NotifierService } from 'angular-notifier';
import { ServerMessage } from '../models/server-message.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient, private notifierService: NotifierService) {}

  public getStudent(id: string = ''): Observable<Student> {
    return this.http.get<Student>(`${this.url}/student${id}`);
  }

  public createStudent(data, token: string) {
    this.http
      .post(`${this.url}/student`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: token
        })
      })
      .subscribe(
        () => {
          this.notifierService.notify('success', 'New student successfully created!');
        },
        err => {
          this.notifierService.notify('error', err.error.message);
          console.error('Error: ', err.error);
        }
      );
  }

  public deleteStudent(id: number, token: string) {
    this.http
      .delete(`${this.url}/student/${id}`, {
        headers: new HttpHeaders({
          Authorization: token
        })
      })
      .subscribe(
        (resp: ServerMessage) => {
          this.notifierService.notify('warning', resp.message);
          window.history.back();
        },
        err => {
          this.notifierService.notify('error', err.error.message);
          console.error('Error: ', err.error);
        }
      );
  }

  public updateStudent(id: number, data, token: string) {
    this.http
      .put(`${this.url}/student/${id}`, data, {
        headers: new HttpHeaders({
          Authorization: token
        })
      })
      .subscribe(
        (resp: ServerMessage) => {
          this.notifierService.notify('success', resp.message);
        },
        err => {
          this.notifierService.notify('error', err.error.message);
          console.error('Error: ', err.error);
        }
      );
  }
}
