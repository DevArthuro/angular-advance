import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toogleCase',
})
export class TooglePipe implements PipeTransform {
  transform(value: string, upper: boolean): string {
    if (upper) {
      return value.toUpperCase();
    }
    return value;
  }
}
