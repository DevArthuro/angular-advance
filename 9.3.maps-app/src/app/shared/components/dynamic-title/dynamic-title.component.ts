import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs';

interface ROUTER_MENU_SCHEMA {
  path: string | undefined;
  title: string;
}

@Component({
  selector: 'app-dynamic-title',
  imports: [AsyncPipe],
  templateUrl: './dynamic-title.component.html',
})
export class DynamicTitleComponent {
  router = inject(Router);
  routerMenu = input.required<ROUTER_MENU_SCHEMA[]>();

  pageTitle$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    tap((event) => console.log(event)),
    map((event) =>
      this.routerMenu().find((router) => `/${router.path}` === event.url)?.title ?? 'Unknown title'
    )
  );
}
