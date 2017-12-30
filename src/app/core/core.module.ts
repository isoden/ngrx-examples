import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { TopPageComponent } from './containers/top-page/top-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path     : '',
        component: TopPageComponent,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    TopPageComponent,
  ],
})
export class CoreModule { }
