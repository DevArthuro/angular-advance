import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import HeroComponent from './pages/hero/hero.component';
import { DragonBallComponent } from './pages/dragon-ball/dragon-ball.component';

export const routes: Routes = [
    {
        path: "",
        component: CounterComponent
    },
    {
        path: "hero",
        component: HeroComponent
    },
    {
        path: "dragonball",
        component: DragonBallComponent
    },
    {
        path: "**",
        redirectTo: ""
    }
];
