import { Component, inject, resource, ResourceStatus, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableComponent } from '../../components/table/tableList.component';
import { CountryService } from '../../services/contriesRest.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'country-by-capital-page',
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal<string>('');

  callServiceCountries = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request: { query } }) => {
      if (!query) return [];
      return await firstValueFrom(this.countryService.getCapitalsByQuery(query));
    },
  });
}
