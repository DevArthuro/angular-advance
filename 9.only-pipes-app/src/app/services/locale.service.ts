import { Injectable, LOCALE_ID, signal, inject } from '@angular/core';

export enum AVAILABLE_LANGUAGES {
  en = 'en', 
  fr = 'fr',
  es = 'es'
}

@Injectable({
  providedIn: 'root',
})
export class LocaleService {
  currentLocale = signal<AVAILABLE_LANGUAGES>(
    localStorage.getItem('locale') as AVAILABLE_LANGUAGES
  );

  constructor() {}

  getLocale() {
    return this.currentLocale();
  }

  changeLocale(locale: AVAILABLE_LANGUAGES) {
    localStorage.setItem('locale', locale);
    this.currentLocale.set(locale);
    window.location.reload();
  }
}
