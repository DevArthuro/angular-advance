import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'fullscreen',
    loadComponent: () =>
      import('../app/pages/fullscreen-map-page/fullscreen-map-page.component'),
    title: 'FullScreen Map',
  },
  {
    path: 'markers',
    loadComponent: () =>
      import('../app/pages/markers-page/markers-page.component'),
    title: 'Marcadores',
  },
  {
    path: 'houses',
    loadComponent: () =>
      import('../app/pages/houses-page/houses-page.component'),
    title: 'Propiedades disponibles',
  },
  {
    path: '**',
    redirectTo: "fullscreen"
  },
];
