import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("../app/shared/pages/home-page/home-page.component")
     },
    {
        path: "country",
        loadChildren: () => import("../app/country/country.routes")
    }
];
