import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableComponent } from '../../components/table/tableList.component';
import { CountryService } from '../../services/contriesRest.service';
import { firstValueFrom, map, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'country-by-country-page',
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent {
  countryService = inject(CountryService);

  preQuery = inject(ActivatedRoute).snapshot.queryParamMap.get('country');
  router = inject(Router);
  query = linkedSignal<string>(() => this.preQuery ?? '');

  // It recive the promise

  // callServiceCountries = resource({
  //   request: () => ({ query: this.query() }),
  //   loader: async ({ request: { query } }) => {
  //     if (!query) return [];
  //     return await firstValueFrom(
  //       this.countryService.getCountriesByQuery(query)
  //     );
  //   },
  // });

  // It recive the observable
  callServiceCountries = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request: { query } }) => {
      if (!query) return of([]);
      this.router.navigate(['country/by-country'], {
        queryParams: {
          country: query,
        },
      });
      return this.countryService.getCountriesByQuery(query);
    },
  });
}
