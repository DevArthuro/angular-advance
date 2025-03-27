import { Component, signal } from '@angular/core';
import { TooglePipe } from '../../pipes/pipes.pipe';
import { heroes } from '../../data/heroes.data';
import { BooleanToTextPipe } from '../../pipes/booleanToTextPipe.pipe';
import { LowerCasePipe, TitleCasePipe } from '@angular/common';
import { ColorConvertPipe } from '../../pipes/colortConvert.pipe';
import { CreatorCasePipe } from '../../pipes/creatorPipe.pipe';
import { HeroSortPipe } from '../../pipes/sort-by-attribute.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { SearchHeroesPipe } from '../../pipes/search-heroes.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    TooglePipe,
    BooleanToTextPipe,
    TitleCasePipe,
    ColorConvertPipe,
    CreatorCasePipe,
    LowerCasePipe,
    HeroSortPipe,
    SearchHeroesPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('carlos');
  convert = signal(false);
  heroes = signal(heroes);

  keySort = signal<keyof Hero | null>(null);
  search = signal('');

  changeState() {
    return this.convert.update((value) => !value);
  }
}
