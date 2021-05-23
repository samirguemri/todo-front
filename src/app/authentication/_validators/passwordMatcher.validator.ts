import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function createPasswordMatcherValidator(): ValidatorFn {
  // @ts-ignore
  return (form: FormGroup): ValidationErrors | null => {

    const password: string = form.get('password')?.value;
    const confirmPassword: string = form.get('confirmPassword')?.value;

    return password !== confirmPassword ? {passwordNotMatching: true} : null;
  };
}
