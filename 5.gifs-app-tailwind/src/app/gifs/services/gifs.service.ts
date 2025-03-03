import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { GIF, GiphyResponse } from '../interfaces/giphy.interface';
import { environment } from 'src/environments/environment';
import { GiphyMapper } from '../mapper/giphyMapper';
import { map, tap } from 'rxjs';

export enum KEYS_LOCALSTORAGE {
  HISTORY_SEARCH = 'historySearch',
}

@Injectable({
  providedIn: 'root',
})
export class GifService {
  http = inject(HttpClient);
  gifs = signal<GIF[]>([]);
  load = signal<boolean>(true);

  historySearch = signal<Record<string, GIF[]>>(
    this.loadLocalStorage(KEYS_LOCALSTORAGE.HISTORY_SEARCH)
  );
  keyHistorySearch = computed(() => Object.keys(this.historySearch()));

  saveGifsToLocalStorage = effect(() => {
    const parseString = JSON.stringify(this.historySearch());
    localStorage.setItem(KEYS_LOCALSTORAGE.HISTORY_SEARCH, parseString);
  });

  constructor() {
    this.loadGifs();
  }

  private loadLocalStorage(key: string) {
    const historySearch = localStorage.getItem(key);

    if (historySearch) {
      return JSON.parse(historySearch);
    }

    return {};
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
          this.historySearch.update((prev) => ({
            ...prev,
            [querySearch.toLowerCase()]: data,
          }));
        })
      );
  }

  getGifBySearchHistory(query: string): GIF[] {
    return this.historySearch()[query];
  }
}
