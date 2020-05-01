import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getStudent(id: string = ''): Observable<Student> {
    return this.http.get<Student>(`${this.url}/student${id}`);
  }

  public createStudent(data, token: string) {
    return this.http.post(`${this.url}/student`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token
      })
    });
  }

  public deleteStudent(id: number, token: string) {
    return this.http.delete(`${this.url}/student/${id}`, {
      headers: new HttpHeaders({
        Authorization: token
      })
    });
  }

  public updateStudent(id: number, data, token: string) {
    return this.http.put(`${this.url}/student/${id}`, data, {
      headers: new HttpHeaders({
        Authorization: token
      })
    });
  }
}
