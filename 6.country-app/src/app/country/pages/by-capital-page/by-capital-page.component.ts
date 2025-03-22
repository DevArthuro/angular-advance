import { Component, inject, linkedSignal, resource, ResourceStatus, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableComponent } from '../../components/table/tableList.component';
import { CountryService } from '../../services/contriesRest.service';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'country-by-capital-page',
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {
  countryService = inject(CountryService);

  preQuery = inject(ActivatedRoute).snapshot.queryParamMap.get('capital');
  router = inject(Router);
  query = linkedSignal<string>(() => this.preQuery ?? "");

  callServiceCountries = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request: { query } }) => {
      if (!query) return [];
      this.router.navigate(['country/by-capital'], {
        queryParams: {
          capital: query,
        },
      });
      return await firstValueFrom(
        this.countryService.getCapitalsByQuery(query)
      );
    },
  });
}
