import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path      : '',
    redirectTo: '/counter',
    pathMatch : 'full',
  },

  // カウンターページ
  {
    path        : 'counter',
    loadChildren: './counter/counter.module#CounterModule',
  }
];
