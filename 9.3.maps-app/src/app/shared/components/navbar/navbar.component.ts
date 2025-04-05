import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { DynamicTitleComponent } from '../dynamic-title/dynamic-title.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [DynamicTitleComponent, RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  routes = routes
    .map((route) => ({
      path: route.path,
      title: `${route.title ?? 'Unknown page'}`,
    }))
    .filter((route) => route.path !== '**');
}
