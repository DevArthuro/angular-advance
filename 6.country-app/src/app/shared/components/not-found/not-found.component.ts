import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent {
  localtion = inject(Location)

  goBack() {
    this.localtion.back()
  }
}
