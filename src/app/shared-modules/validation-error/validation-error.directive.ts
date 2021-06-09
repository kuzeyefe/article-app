import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  DoCheck,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { ValidationErrorMessageComponent } from './validation-error-message.component';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[validationError]',
})
export class ValidationErrorDirective
  implements OnInit, AfterViewInit, DoCheck {
  @Input() validationError: ValidationErrorOptions;
  public componentRef: ComponentRef<any>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    public componentFactoryResolver: ComponentFactoryResolver,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      ValidationErrorMessageComponent
    );
    this.componentRef = this.viewContainerRef.createComponent(factory);
  }

  ngDoCheck() {
    if (
      this.validationError.control.touched &&
      this.validationError.control &&
      this.validationError.control.invalid
    ) {
      this.renderer.addClass(
        this.viewContainerRef.element.nativeElement,
        'is-danger'
      );
      this.componentRef.instance.isMessageVisible = true;
      this.componentRef.instance.setErrorMessage(
        this.generateErrorMessage(this.validationError.control)
      );
    } else {
      this.componentRef.instance.isMessageVisible = false;
      this.renderer.removeClass(
        this.viewContainerRef.element.nativeElement,
        'is-danger'
      );
    }
  }

  generateErrorMessage(formControl: FormControl): string {
    if (formControl.hasError('required')) {
      if (this.validationError.fieldName) {
        return `${this.validationError.fieldName} is required!`;
      } else {
        return 'This field is required!';
      }
    } else if (formControl.hasError('minlength')) {
      return `This field should be at least ${formControl.errors.minlength.requiredLength}`;
    } else if (formControl.hasError('isDateLaterThan')) {
      return `Date should be later than ${formControl.errors.isDateLaterThan.conditionDate}`;
    } 

    return '';
  }

  ngAfterViewInit() { }
}

export class ValidationErrorOptions {
  control: FormControl;
  fieldName?: string;
}
