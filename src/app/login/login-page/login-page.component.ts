import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  public pageName = 'registration_page.page_name.sign_in';
  public pageState = true;

  public login = '';
  public password = '';
  public confirm = '';
  public isConfirm = true;
  public cautionText = '';

  constructor() {}

  ngOnInit() {}

  public goToRegister(): void {
    this.pageName = 'registration_page.page_name.sign_up';
    this.pageState = false;
    this.confirm = '';
  }

  public goToLogin(): void {
    this.pageName = 'registration_page.page_name.sign_in';
    this.pageState = true;
    this.isConfirm = true;
  }

  public onSubmit(): void {
    if (this.pageState) {
      if (this.login === '' || this.password === '') {
        this.cautionText = 'registration_page.error.fields_cannot_be_empty';
        this.isConfirm = false;
      } else {
        this.request(this.login, this.password, 'signIn');
      }
    } else {
      if (this.login === '' || this.password === '' || this.confirm === '') {
        this.cautionText = 'registration_page.error.fields_cannot_be_empty';
        this.isConfirm = false;
      } else {
        if (this.password === this.confirm) {
          this.isConfirm = true;
          this.request(this.login, this.password, 'signUp');
        } else {
          this.cautionText = 'registration_page.error.password_do_not_match';
          this.isConfirm = false;
        }
      }
    }
  }

  public changeInput(type: string, value): void {
    this.isConfirm = true;
    if (type === 'login') {
      this.login = value;
    } else if (type === 'password') {
      this.password = value;
    } else if (type === 'confirm') {
      this.confirm = value;
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
}
