import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  environmentVariables = environment
}
