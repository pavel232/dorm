import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegistrationPageComponent
  ]
})
export class LoginModule {
  RegistrationPageComponent;
}
