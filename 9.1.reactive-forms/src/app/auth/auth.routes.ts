import { Route } from "@angular/router";

const authRoutes: Route[] = [
     {
        title: 'Autenticación',
        path: '',
        loadComponent: () => import("./pages/register-page/register-page.component")
     }
]

export default authRoutes;