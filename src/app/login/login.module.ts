import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared-module.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule, TranslateModule],
  declarations: [LoginPageComponent]
})
export class LoginModule {
  LoginPageComponent;
}
