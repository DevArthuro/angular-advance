import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterSharedComponent } from "./shared/components/footer-shared/footer-shared.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterSharedComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'country-app';
}
