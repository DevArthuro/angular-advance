import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenuComponent], // It is necesary for children compoents
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {

}
