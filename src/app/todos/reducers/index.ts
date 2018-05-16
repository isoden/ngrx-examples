import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItems from './items';
import * as fromVisibilityFilter from './visibility-filter';

export const reducers = {
  items           : fromItems.reducer,
  visibilityFilter: fromVisibilityFilter.reducer,
};

const {
  selectAll: selectAllTodos,
} = fromItems.adapter.getSelectors();

export interface TodosState {
  items: fromItems.TodosState;
  visibilityFilter: fromVisibilityFilter.VisibilityFilterState;
}

export interface State {
  todos: TodosState;
}

export const selectTodos = createFeatureSelector<TodosState>('todos');
export const selectTodosItems = createSelector(selectTodos, state => state.items);
export const selectTodosVisibilityFilter = createSelector(selectTodos, state => state.visibilityFilter);
export const getVisibilityFilter = createSelector(selectTodosVisibilityFilter, fromVisibilityFilter.getVisibilityFilter);
export const getTodos = createSelector(selectTodosItems, selectAllTodos);
export const getFilteredTodos = createSelector(getVisibilityFilter, getTodos, (filter, todos) => {
  if (filter === 'SHOW_ALL') {
    return todos;
  }

  return todos.filter(todo => {
    switch (filter) {
      case 'SHOW_ACTIVE': return !todo.completed;
      case 'SHOW_COMPLETED': return todo.completed;
    }
  });
});
