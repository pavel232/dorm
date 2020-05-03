import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:8080';

  @Output() public userName: EventEmitter<string> = new EventEmitter();
  @Output() public isLogin: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifierService: NotifierService
  ) {}

  public checkUser(): boolean {
    const user: User = JSON.parse(localStorage.getItem('User'));

    if (user) {
      this.userName.emit(user.login);
      this.isLogin.emit(true);
      return true;
    } else {
      this.isLogin.emit(false);
      return false;
    }
  }

  public signUp(data: Login) {
    return this.http.post(`${this.url}/signup`, data);
  }

  public logIn(data: Login): void {
    this.http.post(`${this.url}/login`, data).subscribe(
      (resp: User) => {
        localStorage.setItem('User', JSON.stringify(resp));

        if (this.checkUser()) {
          this.router.navigateByUrl('/main');
          this.notifierService.notify('success', `User: '${resp.login}' is logged in!`);
        }
      },
      err => {
        this.notifierService.notify('error', err.error.message);
        console.error('Error: ', err.error);
      }
    );
  }

  public logout(): void {
    localStorage.removeItem('User');
    this.isLogin.emit(false);
    this.router.navigateByUrl('/login');
  }
}
