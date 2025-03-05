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
        path: "**",
        redirectTo: "by-capital"
      }
    ],
  },
];

export default countryRoutes;
