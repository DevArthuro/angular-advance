import { Component, signal } from '@angular/core';
import { TooglePipe } from '../../pipes/pipes.pipe';
import { heroes } from '../../data/heroes.data';
import { BooleanToTextPipe } from '../../pipes/booleanToTextPipe.pipe';
import { LowerCasePipe, TitleCasePipe } from '@angular/common';
import { ColorConvertPipe } from '../../pipes/colortConvert.pipe';
import { CreatorCasePipe } from '../../pipes/creatorPipe.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    TooglePipe,
    BooleanToTextPipe,
    TitleCasePipe,
    ColorConvertPipe,
    CreatorCasePipe,
    LowerCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('carlos');
  convert = signal(false);
  heroes = signal(heroes);

  changeState() {
    return this.convert.update((value) => !value);
  }
}
