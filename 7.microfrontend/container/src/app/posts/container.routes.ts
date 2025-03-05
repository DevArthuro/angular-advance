import { loadRemoteModule } from "@angular-architects/native-federation";
import { Route } from "@angular/router";

const router: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout-navbar/layout-navbar.component'),
    children: [
      {
        path: 'register',
        loadComponent: () =>
          loadRemoteModule('register-post', './register-post-page'),
      },
      {
        path: 'list',
        loadComponent: () =>
          loadRemoteModule('list-posts', './list-posts-page'),
      },
    ],
  },
];

export default router;