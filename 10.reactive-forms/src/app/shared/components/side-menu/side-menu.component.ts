import { Component } from '@angular/core';
import authRoutes from '../../../auth/auth.routes';
import reactiveRoutes from '../../../reactive/reactive.routes';
import countryRoutes from '../../../country/country.routes';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  authRoutes = authRoutes.map((route) => ({
    title: route.title,
    path: `auth/${route.path}`,
  }));

  reactiveRoutes = reactiveRoutes.map((route) => ({
    title: route.title,
    path: `reactive/${route.path}`,
    children: route.children
      ?.filter((routeFilter) => routeFilter.path !== '**')
      .map((routeChild) => ({
        title: routeChild.title,
        path: `reactive/${routeChild.path}`,
      })),
  }));

  countryRoutes = countryRoutes.map((route) => ({
    title: route.title,
    path: `country/${route.path}`,
  }));
}
