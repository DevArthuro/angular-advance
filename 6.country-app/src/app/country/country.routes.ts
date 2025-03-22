import { Route } from '@angular/router';

const countryRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./layout/wrapperCountries.component'),
    children: [
      {
        path: 'by-capital',
        loadComponent: () =>
          import('./pages/by-capital-page/by-capital-page.component'),
      },
      {
        path: 'by-country',
        loadComponent: () =>
          import('./pages/by-country-page/by-country-page.component'),
      },
      {
        path: 'by-region',
        loadComponent: () =>
          import('./pages/by-region-page/by-region-page.component'),
      },
      {
        path: 'by-region/:region',
        loadComponent: () =>
          import('./pages/by-region-page/by-region-page.component'),
      },
      {
        path: 'by/:id',
        loadComponent: () =>
          import('./pages/by-id-country/by-id-country.component'),
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];

export default countryRoutes;
