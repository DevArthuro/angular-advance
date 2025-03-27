import { Component, signal } from '@angular/core';
import { TooglePipe } from '../../pipes/pipes.pipe';
import { heroes } from '../../data/heroes.data';
import { BooleanToTextPipe } from '../../pipes/booleanToTextPipe.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-custom-page',
  imports: [TooglePipe, BooleanToTextPipe, TitleCasePipe],
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
