import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  public login = '';
  public password = '';
  public confirm = '';
  public isConfirm = true;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.password === this.confirm) {
      this.isConfirm = true;
      this.signUp(this.login, this.password);
    } else {
      this.isConfirm = false;
    }
  }

  signUp(login, password) {
    const data: Login = {
      username: login,
      password
    };
    fetch('http://localhost:8080/signup', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // .then(resp => resp.json())
    .then(d => console.log(d))
    .catch(err => console.log(err));
  }

}
