import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "posts",
        loadChildren: () => import("./posts/container.routes")
    }
];
