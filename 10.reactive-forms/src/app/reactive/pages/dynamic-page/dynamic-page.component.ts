import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
    name: this.fb.control('Carlos', [
      Validators.required,
      Validators.minLength(4),
    ]),
    favorites: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      [Validators.required, Validators.minLength(2)]
    ),
  });

  nameGame = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  get getFavorities() {
    return this.formGames.get('favorites') as unknown as FormArray;
  }

  onSaveGameInFavorities() {
    if (this.nameGame.invalid) return;

    const nameGame = this.nameGame.value;

    this.getFavorities.push(this.fb.control(nameGame, [Validators.required]));

    this.nameGame.reset();
  }

  onDeleteFavorities(index: number) {
    this.getFavorities.removeAt(index);
  }
}
