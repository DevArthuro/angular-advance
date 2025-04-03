import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private baseUrl = `https://restcountries.com/v3.1`;
  private http = inject(HttpClient);
  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regions(): string[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    if (!region) return of([]);

    const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;

    return this.http.get<Country[]>(url);
  }

  getCountryByAlphaCode(code: string): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${code}?fields=cca3,name,borders`;

    return this.http.get<Country>(url);
  }

  getBorderCountriesByCodes(borders: string[]): Observable<Country[]> {
    if (borders.length === 0) return of([])
    
    const countries: Observable<Country>[] = [];
    borders.forEach((code) => {
        const country = this.getCountryByAlphaCode(code)
        countries.push(country)
    })

    return combineLatest(countries)
  }
}
