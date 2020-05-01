import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from './services/login.service';
import { ServerMessage } from './models/server-message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'dorm';

  constructor(translate: TranslateService, private loginService: LoginService) {}
}
