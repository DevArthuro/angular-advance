import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseCountry } from '../interfaces/res.interface';
import { catchError, delay, map, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';

const BASE_URL_API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  http = inject(HttpClient);

  getCapitalsByQuery(query: string) {
    query = query.toLowerCase();

    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/capital/${query}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get capitals...')
          );
        })
      );
  }

  getCountriesByQuery(query: string) {
    query = query.toLowerCase();

    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/name/${query}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        delay(5000),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get countries...')
          );
        })
      );
  }

  getCountyByQuery(code: string) {
    return this.http
      .get<ResponseCountry[]>(`${BASE_URL_API}/alpha/${code}`)
      .pipe(
        map((value) => CountryMapper.parseResponseListToCountryList(value)),
        map((value) => value.at(0)!),
        catchError((error) => {
          return throwError(
            () => new Error('Has ocurrer error to get country...')
          );
        })
      );
  }
}
