import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.sass',
})
export class CounterComponent {
  public counter: number = 0;

  constructor() {}

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
