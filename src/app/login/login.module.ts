import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [RegistrationPageComponent, LoginPageComponent]
})
export class LoginModule {
  RegistrationPageComponent;
}
