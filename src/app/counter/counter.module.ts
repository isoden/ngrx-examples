import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { CounterPageComponent } from './containers/counter-page/counter-page.component';
import { CounterComponent } from './components/counter/counter.component';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', reducers),
    RouterModule.forChild([
      {
        path     : '',
        component: CounterPageComponent,
      }
    ])
  ],
  declarations: [CounterPageComponent, CounterComponent]
})
export class CounterModule { }
