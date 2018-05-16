import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
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

  todos$ = this.store.pipe(select(fromTodos.getFilteredTodos));

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
