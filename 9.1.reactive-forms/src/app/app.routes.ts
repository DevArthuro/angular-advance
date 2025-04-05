import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.routes'),
  },
  {
    path: "**",
    redirectTo: "auth"
  }
];
