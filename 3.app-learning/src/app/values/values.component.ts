import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-values',
  standalone: false,
  templateUrl: './values.component.html',
  styleUrl: './values.component.sass'
})
export class ValuesComponent {
  @Input() counter?: number;
}
