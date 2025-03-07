import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { TableComponent } from '../../components/table/tableList.component';
import { CountryService } from '../../services/contriesRest.service';
import { Country } from '../../interfaces/country.interface';
@Component({
  selector: 'country-by-capital-page',
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html',
})
export default class ByCapitalPageComponent {
  countryService = inject(CountryService);
  countries = signal<Country[]>([]);
  isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);

  onSearch(value: string) {
    if (this.isLoading()) return;

    this.isLoading.update((prev) => !prev);
    this.countryService.getCapitalByQuery(value).subscribe({
      next: (response) => {
        this.countries.set(response);
        console.log(response)
      },
      error: (error) => {
        this.isError.set('Has ocurr the error');
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      },
    });
  }
}
