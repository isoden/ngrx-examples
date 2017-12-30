import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';

import { routes } from './routes';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/containers/app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
