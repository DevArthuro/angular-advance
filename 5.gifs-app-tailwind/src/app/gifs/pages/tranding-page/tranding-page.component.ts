import { Component, inject } from '@angular/core';
import { ListComponent } from "../../components/gifs/list/list.component";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-tranding-page',
  imports: [ListComponent],
  templateUrl: './tranding-page.component.html',
})
export default class TrandingPageComponent {
  serviceGif = inject(GifService)
}
