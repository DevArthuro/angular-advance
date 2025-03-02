import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { GiphyItemSchema, GiphyResponse } from '../interfaces/giphy.interface';
import { environment } from 'src/environments/environment';
import { GiphyMapper } from '../mapper/giphyMapper';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  http = inject(HttpClient);
  gifs = signal<GiphyItemSchema[]>([]);
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
          rating: 0,
        },
      })
      .subscribe((res) => {
        const data = GiphyMapper.parseDataGiphyToGiphySchema(res.data);
        this.gifs.set(data)
      });
  }
}
