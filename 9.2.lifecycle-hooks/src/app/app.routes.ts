import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/pages/home-page/home-page.component'),
    title: 'Home',
  },
  {
    path: 'contact',
    loadComponent: () => import('../app/pages/contact-page/contact-page.component'),
    title: 'Contact',
  },
  {
    path: 'about',
    loadComponent: () => import('../app/pages/about-page/about-page.component'),
    title: 'About',
  },
  {
    path: "**",
    redirectTo: ""
  }
];
