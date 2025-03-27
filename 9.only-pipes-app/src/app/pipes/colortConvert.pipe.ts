import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorConvert',
})
export class ColorConvertPipe implements PipeTransform {
  transform(value: Color, hex?: boolean): string {
    if (hex) {
        return ColorMap[value] ?? "#FFF"
    }
    return Color[value] ?? "blanco";
  }
}
