import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export default class RegisterPageComponent {
  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myFormRegister = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(FormUtils.namePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(FormUtils.emailPattern)],
        [FormUtils.asyncEmailValidatorServer]
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(FormUtils.notOnlySpacesPattern),
          FormUtils.validateSpecificUsername
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [FormUtils.isFieldEqualsFormError('password', 'confirmPassword')],
    }
  );

  onSaven() {
    this.myFormRegister.markAllAsTouched();
    if (this.myFormRegister.invalid) return;

    console.log(this.myFormRegister.value);
  }
}
