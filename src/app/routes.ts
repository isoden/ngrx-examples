import { Routes } from '@angular/router';

export const routes: Routes = [
  // カウンターページ
  {
    path        : 'counter',
    loadChildren: './counter/counter.module#CounterModule',
  }
];
