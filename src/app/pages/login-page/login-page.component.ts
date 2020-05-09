import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login/login.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public isConfirm = true;
  public user: Login = {
    username: '',
    password: ''
  };

  constructor(private loginService: LoginService, private notifierService: NotifierService) {}

  ngOnInit() {}

  public onSubmit(): void {
    if (!this.user.username || !this.user.password) {
      this.isConfirm = false;
      this.notifierService.notify('warning', 'Fields cannot be empty!');
    } else {
      this.loginService.logIn(this.user);
    }
  }

  public loginGuest() {
    this.loginService.loginGuest();
  }

  public changeInput(type: string, value: any): void {
    this.isConfirm = true;
    if (type === 'login') {
      this.user.username = value;
    } else if (type === 'password') {
      this.user.password = value;
    }
  }
}
