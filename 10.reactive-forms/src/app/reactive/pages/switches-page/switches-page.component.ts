import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-switches-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-page.component.html',
})
export default class SwitchesPageComponent { 
  private fb = inject(FormBuilder);

  formUtils = FormUtils

  formSwitches = this.fb.group({
    gender: ['', [Validators.required]],
    notifications: [true],
    termsAndConditions: [false, [Validators.requiredTrue]]
  })

  onSave() {
    this.formSwitches.markAllAsTouched()
    if (this.formSwitches.invalid) return

    console.log(this.formSwitches.value)
  }
}
