import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'navbar-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-page.component.html',
})
export class NavbarPageComponent {
  routes = routes.map(({ title, path }) => ({
    title: `${title}`,
    path
  })).filter(({path}) => path !== "**")
}
