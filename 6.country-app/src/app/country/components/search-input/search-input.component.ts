import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  onSearchOutput = output<string>();
  placeholder = input<string>('Buscar');
  devounceTime = input(500);

  valueDefined = input('');

  onSearch(value: string) {
    this.onSearchOutput.emit(value);
  }

  inputValue = linkedSignal<string>(() => this.valueDefined());

  debounceEffect = effect((onCleanUp) => {
    const value = this.inputValue();

    const timeOut = setTimeout(() => {
      this.onSearch(value);
    }, this.devounceTime());

    onCleanUp(() => {
      clearTimeout(timeOut);
    });
  });
}
