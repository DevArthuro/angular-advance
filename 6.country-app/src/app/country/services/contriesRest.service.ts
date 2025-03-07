import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseCountry } from '../interfaces/res.interface';
import { catchError, map, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';

const BASE_URL_API = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  http = inject(HttpClient);

  getCapitalByQuery(query: string) {
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
}
