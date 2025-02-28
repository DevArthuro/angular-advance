import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet], // It is necesary for children compoents
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPageComponent {

}
