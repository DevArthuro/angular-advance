import { Component, computed, inject } from '@angular/core';
import { MENU_OPTIONS } from '../../../interfaces/sideManu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './options.component.html',
})
export class OptionsComponent {
  gifService = inject(GifService);

  menu: MENU_OPTIONS[] = [
    {
      href: '/dashboard/searching',
      label: 'Buscar',
      subLabel: 'Buscar Gifs',
      logo: 'fa-solid fa-magnifying-glass fa-xl mx-4',
    },
    {
      href: '/dashboard/trending',
      label: 'Trending',
      subLabel: 'Popular Gifs',
      logo: 'fa-solid fa-seedling fa-xl mx-4',
    },
  ];
}
