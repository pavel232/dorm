import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleWrapperComponent } from './google-wrapper/google-wrapper.component';
import { GoogleInputComponent } from './google-input/google-input.component';
import { TranslateModule } from '@ngx-translate/core';
import { CautionLabelComponent } from './caution-label/caution-label.component';

@NgModule({
  declarations: [GoogleWrapperComponent, GoogleInputComponent, CautionLabelComponent],
  imports: [CommonModule, TranslateModule],
  exports: [GoogleInputComponent, CautionLabelComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
