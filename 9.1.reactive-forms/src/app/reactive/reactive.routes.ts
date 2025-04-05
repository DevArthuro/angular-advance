import { Route } from '@angular/router';

const reactiveRoutes: Route[] = [
  {
    title: 'Rutas Reactivas',
    path: '',
    children: [
      {
        title: 'Bàsicos',
        path: 'basic',
        loadComponent: () => import('./pages/basic-page/basic-page.component'),
      },
      {
        title: 'Dinamicos',
        path: 'dynamic',
        loadComponent: () => import('./pages/dynamic-page/dynamic-page.component'),
      },
      {
        title: 'Switchs',
        path: 'switches',
        loadComponent: () => import('./pages/switches-page/switches-page.component'),
      },
      {
        path: "**",
        redirectTo: "basic"
      }
    ],
  },
];

export default reactiveRoutes;
