import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public counterNormal: number = 0;
  public counterSignal  = signal(0);

  increase() {
    this.counterNormal++;
    this.counterSignal.update((current) => current + 1)
  }

  decrease() {
    this.counterNormal--;
    this.counterSignal.update((current) => current - 1)
  }

  reset() {
    this.counterNormal = 0;
    this.counterSignal.set(0);
  }
}
