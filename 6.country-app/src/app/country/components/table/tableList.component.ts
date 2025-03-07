import { Component, input } from '@angular/core';
import { ResponseCountry } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list-table',
  imports: [],
  templateUrl: './tableList.component.html'
})
export class TableComponent {
  isLoading = input.required<boolean>();
  countries = input.required<ResponseCountry[]>()
}
