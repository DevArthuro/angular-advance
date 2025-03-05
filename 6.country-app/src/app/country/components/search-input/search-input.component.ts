import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html'
})
export class SearchInputComponent {
  onSearchOutput = output<string>()
  placeholder = input<string>("Buscar")

  onSearch(value: string) {
    this.onSearchOutput.emit(value)
  }
}
