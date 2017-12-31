import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosPageComponent } from './containers/todos-page/todos-page.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('todos', reducers),
    RouterModule.forChild([
      {
        path     : '',
        component: TodosPageComponent,
      }
    ])
  ],
  declarations: [
    TodosPageComponent,
    TodoInputComponent,
    TodoComponent,
    TodoFilterComponent,
  ],
})
export class TodosModule { }
