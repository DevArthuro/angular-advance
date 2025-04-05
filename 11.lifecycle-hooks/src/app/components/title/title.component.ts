import { Component, input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})
export class TitleComponent {
  inputProp = input.required<string>();

  ngOnChanges(changes: SimpleChange) {
    console.log(changes)
  };
}
