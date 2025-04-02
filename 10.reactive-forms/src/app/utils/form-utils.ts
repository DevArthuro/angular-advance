import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
export class FormUtils {
  static isErrorField(form: FormGroup, field: string) {
    return !!form.controls[field].errors && form.controls[field].touched;
  }

  static getMessageError(form: FormGroup, field: string) {
    if (!form.controls[field]) return null;

    const errors = form.controls[field].errors ?? {};

    return FormUtils.dynamicMessageSwitch(errors);
  }
  
  static getMessageErrorArrayField(formArray: FormArray, index: number) {
    if (!formArray.controls[index]) return null;

    const errors = formArray.controls[index].errors ?? {};

    return FormUtils.dynamicMessageSwitch(errors);
  }

  static isValidArrayField(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static dynamicMessageSwitch(errors: ValidationErrors) {
    for (const key in errors) {
      switch (key) {
        case 'required':
          return 'El campo es requerido';
        case 'minlength':
          return `Mìnimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `Valor mìnimo de ${errors['min'].min}`;
      }
    }

    return null;
  }


}
