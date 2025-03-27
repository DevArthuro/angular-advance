import { Component, signal } from '@angular/core';
import { TooglePipe } from '../../pipes/pipes.pipe';
import { heroes } from '../../data/heroes.data';

@Component({
  selector: 'app-custom-page',
  imports: [TooglePipe],
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
