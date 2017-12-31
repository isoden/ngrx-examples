import { createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../models';
import { EntityState } from '@ngrx/entity/src/models';
import { TodosActions, TodosActionTypes } from '../actions/todos';

export interface TodosState extends EntityState<Todo> {
  lastId: number;
}

export const adapter = createEntityAdapter<Todo>();
const initialState = adapter.getInitialState<Pick<TodosState, 'lastId'>>({
  lastId: 0,
});

export function reducer(state = initialState, action: TodosActions): TodosState {
  switch (action.type) {
    case TodosActionTypes.Add: {
      const todo = new Todo(state.lastId + 1, action.payload.title);

      return adapter.addOne(todo, { ...state, lastId: todo.id });
    }

    case TodosActionTypes.Toggle: {
      const todo = state.entities[action.payload.id];

      return adapter.updateOne({
        id     : todo.id,
        changes: { completed: !todo.completed },
      }, state);
    }

    default: {
      return state;
    }
  }
}
