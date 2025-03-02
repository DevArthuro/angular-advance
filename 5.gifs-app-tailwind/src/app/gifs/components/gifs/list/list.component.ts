import { Component, input } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { GIF } from 'src/app/gifs/interfaces/giphy.interface';

@Component({
  selector: 'app-list-images',
  imports: [ItemComponent],
  templateUrl: './list.component.html',
})
export class ListComponent {
  gifs = input.required<GIF[]>();
}
