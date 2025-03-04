import { Injectable, signal } from '@angular/core';

const KEYS_LOCALSTORAGE = {
  TRENDING_SCROLL: 'trendingScroll',
};

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  trendingScrollState = signal(this.getTrendingLocalStorage());

  setTrendingScrollState(value: number) {
    this.trendingScrollState.set(value);
    localStorage.setItem(
      KEYS_LOCALSTORAGE.TRENDING_SCROLL,
      JSON.stringify(value)
    );
  }

  private getTrendingLocalStorage() {
    const trendingLoccalStorage = localStorage.getItem(
      KEYS_LOCALSTORAGE.TRENDING_SCROLL
    );

    if (!trendingLoccalStorage) return 0;

    return JSON.parse(trendingLoccalStorage);
  }
}
