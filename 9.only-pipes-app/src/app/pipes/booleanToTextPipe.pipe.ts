import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanToText',
})
export class BooleanToTextPipe implements PipeTransform {
  transform(value: boolean, textTrue: string, textFalse: string): string {
    if (value) {
      return textTrue;
    }
    return textFalse;
  }
}
