import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class GetStudentService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  public getStudentList(id: string = ''): Observable<Student> {
    return this.http.get<Student>(`${this.url}/student${id}`);
  }
}
