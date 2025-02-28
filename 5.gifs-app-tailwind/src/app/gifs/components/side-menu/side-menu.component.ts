import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: 'app-side-menu',
  imports: [HeaderComponent, OptionsComponent],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {

}
