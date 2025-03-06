import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/navigation-layout/navigation-layout.component'),
    children: [
      {
        path: 'register',
        loadComponent: () =>
          loadRemoteModule('register-posts', './register-page').then(
            (file) => file
          ),
      },
      {
        path: 'list',
        loadComponent: () =>
          loadRemoteModule('list-posts', './list-page').then((file) => file),
      },
      {
        path: ':id',
        loadComponent: () =>
          loadRemoteModule('post-detail', './post-detail').then((file) => file),
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

export default routes;
