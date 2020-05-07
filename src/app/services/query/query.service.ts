import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { ServerMessage } from '../../models/server-message.model';
import { Provision } from '../../models/provision.model';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private url = 'http://localhost:8080';

  constructor(private http: HttpClient, private notifierService: NotifierService) {}

  public getList(type: string, id: string = ''): any {
    return this.http.get(`${this.url}/${type}${id}`);
  }

  public createSubject(type: string, data, token: string, provisionData?: Provision) {
    this.http
      .post(`${this.url}/${type}`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: token
        })
      })
      .subscribe(
        (resp: any) => {
          if (type === 'student') {
            provisionData.ID = resp.id;
            this.createProvision(provisionData, token);
          }
          this.notifierService.notify('success', `New ${type} successfully created!`);
        },
        err => {
          this.notifierService.notify('error', err.error.Message);
          console.error('Error: ', err.error);
        }
      );
  }

  public deleteSubject(type: string, id: number, token: string) {
    this.http
      .delete(`${this.url}/${type}/${id}`, {
        headers: new HttpHeaders({
          Authorization: token
        })
      })
      .subscribe(
        (resp: ServerMessage) => {
          this.notifierService.notify('warning', resp.Message);
        },
        err => {
          this.notifierService.notify('error', err.error.Message);
          console.error('Error: ', err.error);
        }
      );
  }

  public updateSubject(type: string, id: number, data, token: string) {
    this.http
      .put(`${this.url}/${type}/${id}`, data, {
        headers: new HttpHeaders({
          Authorization: token
        })
      })
      .subscribe(
        (resp: ServerMessage) => {
          this.notifierService.notify('success', resp.Message);
        },
        err => {
          this.notifierService.notify('error', err.error.Message);
          console.error('Error: ', err.error);
        }
      );
  }

  public getProvision(id: string = ''): Observable<Provision> {
    return this.http.get<Provision>(`${this.url}/provisions${id}`);
  }

  public createProvision(data: Provision, token: string) {
    console.log(data);
    this.http
      .post(`${this.url}/provisions`, data, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: token
        })
      })
      .subscribe(
        () => {
          this.notifierService.notify('success', 'New provision successfully created!');
        },
        err => {
          this.notifierService.notify('error', err.error.Message);
          console.error('Error: ', err.error);
        }
      );
  }
}
