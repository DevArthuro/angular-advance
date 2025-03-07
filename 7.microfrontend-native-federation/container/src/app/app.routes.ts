import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "posts",
        loadChildren: () => import("./container/container.routes")
    },
    {
        path: "**",
        redirectTo: "posts"
    }
];
