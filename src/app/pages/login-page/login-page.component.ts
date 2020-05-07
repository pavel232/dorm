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
  public login = '';
  public password = '';
  public isConfirm = true;

  constructor(private loginService: LoginService, private notifierService: NotifierService) {}

  ngOnInit() {}

  public onSubmit(): void {
    const data: Login = {
      username: this.login,
      password: this.password
    };

    if (!this.login || !this.password) {
      this.isConfirm = false;
      this.notifierService.notify('warning', 'Fields cannot be empty!');
    } else {
      this.loginService.logIn(data);
    }
  }

  public changeInput(type: string, value: any): void {
    this.isConfirm = true;
    if (type === 'login') {
      this.login = value;
    } else if (type === 'password') {
      this.password = value;
    }
  }
}
