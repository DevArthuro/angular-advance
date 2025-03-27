import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSort',
})
export class HeroSortPipe implements PipeTransform {
  transform(value: Hero[], key?: keyof Hero | null): any {
    if (!key) return value;
    switch (key) {
      case 'name':
        return value.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return value.sort((a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));
      case 'color':
        return value.sort((a, b) => a.color - b.color);
      case 'creator':
        return value.sort((a, b) => a.creator - b.creator);
      default:
        return [];
    }
  }
}
