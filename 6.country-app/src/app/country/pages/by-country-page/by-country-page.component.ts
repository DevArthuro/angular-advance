import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/tableList.component";
@Component({
  selector: 'country-by-country-page',
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export default class ByCountryPageComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
