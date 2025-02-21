import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: false,
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.sass',
})
export class ButtonsComponent {
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();

  increment() {
    this.increase.emit()
  }

  decrement() {
    this.decrease.emit()
  }

}
