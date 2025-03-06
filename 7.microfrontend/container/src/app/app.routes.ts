import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "posts",
        loadChildren: () => import("../app/container/container.routes")
    }
];
