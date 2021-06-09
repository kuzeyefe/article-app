import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorModule } from './validation-error/validation-error.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorModule
  ],
  exports: [
    ReactiveFormsModule,
    ValidationErrorModule
  ]
})
export class SharedModule { }
