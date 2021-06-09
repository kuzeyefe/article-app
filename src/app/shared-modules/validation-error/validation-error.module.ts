import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorDirective } from './validation-error.directive';
import { ValidationErrorMessageComponent } from './validation-error-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValidationErrorDirective, ValidationErrorMessageComponent],
  entryComponents: [ValidationErrorMessageComponent],
  exports: [ValidationErrorDirective],
})
export class ValidationErrorModule {}
