import { ValidationErrorModule } from './validation-error.module';

describe('ValidationErrorModule', () => {
  let validationErrorModule: ValidationErrorModule;

  beforeEach(() => {
    validationErrorModule = new ValidationErrorModule();
  });

  it('should create an instance', () => {
    expect(validationErrorModule).toBeTruthy();
  });
});
