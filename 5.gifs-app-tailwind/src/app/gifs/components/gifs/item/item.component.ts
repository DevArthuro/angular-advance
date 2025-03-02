import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html'
})
export class ItemComponent {
  image = input.required<string>()
}
