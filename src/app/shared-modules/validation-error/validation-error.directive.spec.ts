import { ValidationErrorDirective } from './validation-error.directive';

describe('ValidationErrorDirective', () => {
  it('should create an instance', () => {
    const directive = new ValidationErrorDirective(
      null,
      null,
      null,
      null,
      null
    );
    expect(directive).toBeTruthy();
  });
});
