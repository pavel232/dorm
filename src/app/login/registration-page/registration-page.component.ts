import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  public pageName = 'Sign In';
  public pageState = true;

  public login = '';
  public password = '';
  public confirm = '';
  public isConfirm = true;

  constructor() {}

  ngOnInit() {}

  public goToRegister(): void {
    this.pageName = 'Register new user';
    this.pageState = false;
    this.confirm = '';
  }

  public goToLogin(): void {
    this.pageName = 'Sign In';
    this.pageState = true;
    this.isConfirm = true;
  }

  public onSubmit(): void {
    if (this.pageState) {
      this.request(this.login, this.password, 'signIn');
    } else {
      if (this.password === this.confirm) {
        this.isConfirm = true;
        this.request(this.login, this.password, 'signUp');
      } else {
        this.isConfirm = false;
      }
    }
  }

  public request(login, password, method): void {
    const data: Login = {
      username: login,
      password
    };

    if (method === 'signIn') {
      console.log(data);
    } else {
      fetch('http://localhost:8080/signup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        // .then(resp => resp.json())
        .then(d => console.log('Everything is ok:', d))
        .catch(err => console.log('Error:', err));
    }
  }

  public changedPassword(password): void {
    this.password = password;
  }

  public changedLogin(login): void {
    this.login = login;
  }

  public changedRepeatPassword(password): void {
    this.confirm = password;
  }
}
