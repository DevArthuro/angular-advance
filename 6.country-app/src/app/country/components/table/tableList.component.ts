import { Component, input } from '@angular/core';
import { ResponseCountry } from '../../interfaces/res.interface';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './tableList.component.html',
})
export class TableComponent {
  isLoading = input.required<boolean>();
  countries = input.required<Country[] | undefined>();
  isError = input.required<string |unknown>()
}
