import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';

interface MENU_COUNTRY {
  id: number;
  label: string;
  icon: string;
  href: string
}

@Component({
  selector: 'country-top-menu',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {
  menu: MENU_COUNTRY[] = [
    {
      id: 0,
      icon: '/capital.svg',
      label: 'Capital',
      href: "by-capital"
    },
    {
      id: 1,
      icon: '/country.svg',
      label: 'País',
      href: "by-country"
    },
    {
      id: 2,
      icon: '/region.svg',
      label: 'Región',
      href: "by-region"
    },
  ];
}
