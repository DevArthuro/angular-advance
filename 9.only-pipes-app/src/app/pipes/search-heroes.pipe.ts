import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'searchHeroes',
})
export class SearchHeroesPipe implements PipeTransform {
  transform(value: Hero[], query: string): Hero[] {
    if (!query) return value;

    return value.filter((hero) => hero.name.toLowerCase().includes(query.toLowerCase()));
  }
}
