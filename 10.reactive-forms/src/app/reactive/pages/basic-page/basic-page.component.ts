import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms"
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  private fb = inject(FormBuilder);
  formUtil = FormUtils

  // formProduct = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   isStorage: new FormControl(0),
  // });

  formProduct: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(1000)]],
    isStorage: [0, [Validators.required, Validators.min(0)]],
  });


  // isErrorField(field: string) {
  //   return (
  //     !!this.formProduct.controls[field].errors &&
  //     this.formProduct.controls[field].touched
  //   );
  // }

  // getMessageError(field: string) {
  //   if (!this.formProduct.controls[field]) return null;

  //   const errors = this.formProduct.controls[field].errors?? {}

  //   for (const key in errors) {
  //     switch(key) {
  //       case 'required':
  //         return 'El campo es requerido';
  //       case 'minlength':
  //         return `Mìnimo de ${errors['minlength'].requiredLength} caracteres`;
  //       case 'min':
  //         return `Valor mìnimo de ${errors["min"].min}`;
  //     }
  //   }

  //   return null
  // }


  onSave() {
    if (this.formProduct.invalid) {
      this.formProduct.markAllAsTouched()
      return null
    }

    console.log(this.formProduct.value)

    this.formProduct.reset({
      name: "xxx",
      price: 1000,
      isStorage: 0
    })

    return null

  }
}
