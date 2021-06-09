import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-error-message',
  template: `<p *ngIf="isMessageVisible" class="validation-message text-danger">
      {{ errorMessage }}
    </p>`,
  styles: [
    `
      .validation-message {
        color: red;
        font-size:12px;
        margin-top: 3px !important;
        margin-bottom: 5px !important;
      }
      .error-message {
        color: #ff4c00;
      }
    `,
  ],
})
export class ValidationErrorMessageComponent implements OnInit {
  public errorMessage = '';
  public isMessageVisible = false;

  constructor() {}

  ngOnInit() {}

  setErrorMessage(message: string) {
    this.errorMessage = message;
  }
}
