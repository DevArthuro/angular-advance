import { Component, input } from '@angular/core';
import { ResponseCountry } from '../../interfaces/res.interface';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list-table',
  imports: [DecimalPipe],
  templateUrl: './tableList.component.html'
})
export class TableComponent {
  isLoading = input<boolean>(false);
  countries = input<Country[]>([])
}
