import { Route } from '@angular/router';

const countryRoutes: Route[] = [
  {
    title: 'Países',
    path: '',
    loadComponent: () =>
      import('./pages/country-page/country-page.component'),
  },
];

export default countryRoutes;
