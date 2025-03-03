import { Component, inject, signal } from '@angular/core';
import { ListComponent } from "../../components/gifs/list/list.component";
import { GifService } from '../../services/gifs.service';
import { GIF } from '../../interfaces/giphy.interface';

@Component({
  selector: 'app-search-page',
  imports: [ListComponent],
  templateUrl: './search-page.component.html'
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifsSearched = signal<GIF[]>([])

  onSearch(query: string) {
    this.gifService
      .searchGifs(query)
      .subscribe((data) => this.gifsSearched.set(data));
  }
}
