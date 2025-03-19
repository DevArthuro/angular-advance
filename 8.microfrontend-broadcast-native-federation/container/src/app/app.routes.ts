import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./layouts/layout/layout.component"),
    children: [
      {
        path: "",
        loadComponent: () => loadRemoteModule("state-post", "post-list"),
      }
    ]
  }
];
