import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userName = '';
  public isLogin: boolean;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService.userName.subscribe((value: string) => (this.userName = value));
    this.loginService.isLogin.subscribe((value: boolean) => (this.isLogin = value));

    const user: User = JSON.parse(localStorage.getItem('User'));

    if (this.loginService.checkUser()) {
      if (user.role === 'admin' || user.role === 'worker') {
        this.router.navigateByUrl('/main');
      } else {
        this.router.navigateByUrl('/students');
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public logout(): void {
    this.loginService.logout();
  }
}
