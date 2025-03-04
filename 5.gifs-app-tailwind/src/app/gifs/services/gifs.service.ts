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
  stateLoadGifs = signal<boolean>(false);

  historySearch = signal<Record<string, GIF[]>>(
    this.loadLocalStorage(KEYS_LOCALSTORAGE.HISTORY_SEARCH)
  );
  keyHistorySearch = computed(() => Object.keys(this.historySearch()));

  saveGifsToLocalStorage = effect(() => {
    const parseString = JSON.stringify(this.historySearch());
    localStorage.setItem(KEYS_LOCALSTORAGE.HISTORY_SEARCH, parseString);
  });

  trendingGroup = computed<GIF[][]>(() => {
    let result = [];
    for (let i = 0; i < this.gifs().length; i += 3) {
      result.push(this.gifs().slice(i, i + 3));
    }
    return result;
  });

  trendingPage = signal<number>(0)

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
    if (this.stateLoadGifs()) return;

    this.stateLoadGifs.set(true);

    this.http
      .get<GiphyResponse>(`${environment.baseUrlGiphy}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 30,
          offset: this.trendingPage() * 30,
        },
      })
      .subscribe((res) => {
        const data = GiphyMapper.parseDataGiphyToGiphySchema(res.data);
        this.gifs.update((prevData) => [...prevData, ...data]);
        this.trendingPage.update((prevValue) => prevValue + 1)
        this.stateLoadGifs.set(false);
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
