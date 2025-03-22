import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseCountry } from '../interfaces/res.interface';
import { catchError, map, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.interface';

const BASE_URL_API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCapitalCache = new Map<string, Country[]>();
  private queryCountryCache = new Map<string, Country[]>();
  private querySearchCountryByIdCache = new Map<string, Country>();
  private queryRegionCache = new Map<string, Country[]>();

  getCapitalsByQuery(query: string) {
    query = query.toLowerCase();

    if (this.queryCapitalCache.has(query)) {
      return of(this.queryCapitalCache.get(query));
    }

    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/capital/${query}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        tap((capitals) => this.queryCapitalCache.set(query, capitals)),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get capitals...')
          );
        })
      );
  }

  getCountriesByQuery(query: string) {
    query = query.toLowerCase();

    if (this.queryCountryCache.has(query)) {
      return of(this.queryCountryCache.get(query));
    }

    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/name/${query}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        tap((countries) => this.queryCountryCache.set(query, countries)),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get countries...')
          );
        })
      );
  }

  getCountyByQuery(code: string) {
    if (this.querySearchCountryByIdCache.has(code)) {
      return of(this.querySearchCountryByIdCache.get(code));
    }

    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/alpha/${code}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        map((value) => value.at(0)!),
        tap((country) => this.querySearchCountryByIdCache.set(code, country)),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get country...')
          );
        })
      );
  }

  getCountriesByRegion(region: Region) {
    if (this.queryRegionCache.has(region)) {
      return of(this.queryRegionCache.get(region));
    }

    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/region/${region}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        tap((regionRes) => {
          this.queryRegionCache.set(region, regionRes);
        }),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get countries by region...')
          );
        })
      );
  }
}
