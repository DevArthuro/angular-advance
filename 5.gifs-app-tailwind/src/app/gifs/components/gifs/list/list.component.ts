import { Component, input } from '@angular/core';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-list-images',
  imports: [ItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  images = input.required<string[]>();
}
