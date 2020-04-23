import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  public login = '';
  public password = '';

  constructor() {}

  ngOnInit() {}

  onSubmit() {}

  confirm(): void {}
}
