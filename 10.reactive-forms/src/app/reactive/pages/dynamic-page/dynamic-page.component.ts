import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
})
export default class DynamicPageComponent {
  private fb = inject(FormBuilder);
  formUtil = FormUtils;

  formGames = this.fb.group({
    name: this.fb.control('Carlos', [Validators.required, Validators.minLength(4)]),
    nameGame: this.fb.control('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    favorites: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      [Validators.min(2)]
    ),
  });


  get getFavorities() {
    return this.formGames.get('favorites') as unknown as FormArray;
  }
}
