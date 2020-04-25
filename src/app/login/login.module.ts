import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from '../shared/shared-module.module';

@NgModule({
  imports: [CommonModule, FormsModule, SharedModule],
  declarations: [LoginPageComponent]
})
export class LoginModule {
  LoginPageComponent;
}
