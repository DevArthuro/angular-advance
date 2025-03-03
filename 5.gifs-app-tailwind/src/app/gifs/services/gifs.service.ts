import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { GIF, GiphyResponse } from '../interfaces/giphy.interface';
import { environment } from 'src/environments/environment';
import { GiphyMapper } from '../mapper/giphyMapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  http = inject(HttpClient);
  gifs = signal<GIF[]>([]);
  load = signal<boolean>(true);

  constructor() {
    this.loadGifs();
  }

  loadGifs() {
    this.http
      .get<GiphyResponse>(`${environment.baseUrlGiphy}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 30,
          offset: 0,
        },
      })
      .subscribe((res) => {
        const data = GiphyMapper.parseDataGiphyToGiphySchema(res.data);
        this.gifs.set(data);
        this.load.set(false);
      });
  }

  searchGifs(querySearch: string) {
    return this.http
      .get<GiphyResponse>(`${environment.baseUrlGiphy}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 30,
          offset: 0,
          q: querySearch,
        },
      })
      .pipe(
        map(({ data }) => GiphyMapper.parseDataGiphyToGiphySchema(data)),
        tap((data) => {
          console.log(data);
        })
      );
  }
}
