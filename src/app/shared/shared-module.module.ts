import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleWrapperComponent } from './google-wrapper/google-wrapper.component';
import { GoogleInputComponent } from './google-input/google-input.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [GoogleWrapperComponent, GoogleInputComponent],
  imports: [CommonModule, TranslateModule],
  exports: [GoogleInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
