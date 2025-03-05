import { Component } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { TableComponent } from "../../components/table/tableList.component";
@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, TableComponent],
  templateUrl: './by-capital-page.component.html'
})
export default class ByCapitalPageComponent {
  onSearch(value: string) {
    console.log({value})
  }
}
