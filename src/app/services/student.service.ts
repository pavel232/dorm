import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student.model';
import { NotifierService } from 'angular-notifier';
import { ServerMessage } from '../models/server-message.model';
import { Provision } from '../models/provision.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient, private notifierService: NotifierService) {}

  public getStudent(id: string = ''): Observable<Student> {
    return this.http.get<Student>(`${this.url}/student${id}`);
  }

  public createStudent(data, token: string, type: string) {
    this.http
      .post(`${this.url}/${type}`, data, {
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

  public deleteStudent(id: number, token: string, type: string) {
    this.http
      .delete(`${this.url}/${type}/${id}`, {
        headers: new HttpHeaders({
          Authorization: token
        })
      })
      .subscribe(
        (resp: ServerMessage) => {
          this.notifierService.notify('warning', resp.message);
        },
        err => {
          this.notifierService.notify('error', err.error.message);
          console.error('Error: ', err.error);
        }
      );
  }

  public updateStudent(id: number, data, token: string, type: string) {
    this.http
      .put(`${this.url}/${type}/${id}`, data, {
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

  public getProvision(id: string = ''): Observable<Provision> {
    return this.http.get<Provision>(`${this.url}/provisions${id}`);
  }
}
