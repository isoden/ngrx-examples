import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { combineLatest , of } from 'rxjs';
import { VisibilityFilter, Todo } from '../../models';
import * as fromTodos from '../../reducers';
import * as Todos from '../../actions/todos';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosPageComponent implements OnInit {
  visibilityFilter$ = this.store.pipe(select(fromTodos.getVisibilityFilter));

  todos$ = combineLatest(
    this.store.pipe(select(fromTodos.getTodos)),
    this.visibilityFilter$,
    (todos, filter) => {
      const filterMap = {
        SHOW_ALL(todo: Todo) { return true; },
        SHOW_ACTIVE(todo: Todo) { return !todo.completed; },
        SHOW_COMPLETED(todo: Todo) { return todo.completed; },
      };

      return todos.filter(filterMap[filter]);
    }
  );

  constructor(
    private store: Store<fromTodos.State>,
  ) { }

  ngOnInit() {
  }

  onAdd(title: string) {
    this.store.dispatch(new Todos.Add({ title }));
  }

  onToggle(id: number) {
    this.store.dispatch(new Todos.Toggle({ id }));
  }

  onFilterChange(visibilityFilter: VisibilityFilter) {
    this.store.dispatch(new Todos.SetVisibilityFilter({ visibilityFilter }));
  }
}
