import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/tableList.component";

@Component({
  selector: 'country-by-region-page',
  imports: [],
  templateUrl: './by-region-page.component.html',
})
export default class ByRegionPageComponent {
  onSearch(value: string) {
    console.log({ value });
  }
}
