import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPageComponent } from "./components/navbar-page/navbar-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarPageComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '11.lifecycle-hooks';
}
