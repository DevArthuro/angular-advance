import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface RouteSchema {
  id: number;
  label: string;
  href: string;
  hardPush?: boolean;
}

@Component({
  selector: 'container-navigation-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navigation-layout.component.html',
  styleUrl: './navigation-layout.component.scss',
})
export default class NavigationLayoutComponent {
  routes: RouteSchema[] = [
    {
      href: 'list',
      id: 1,
      label: 'Ver posts',
      hardPush: true,
    },
    {
      href: 'register',
      id: 2,
      label: 'Registrar post',
    },
  ];
}
