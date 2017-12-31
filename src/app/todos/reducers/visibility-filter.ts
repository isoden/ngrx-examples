import { TodosActions, TodosActionTypes } from '../actions/todos';
import { VisibilityFilter } from '../models';

export type VisibilityFilterState = VisibilityFilter;

const initialState: VisibilityFilter = 'SHOW_ALL';

export function reducer(state = initialState, action: TodosActions): VisibilityFilterState {
  switch (action.type) {
    case TodosActionTypes.SetVisibilityFilter: {
      return action.payload.visibilityFilter;
    }

    default: {
      return state;
    }
  }
}

export const getVisibilityFilter = (state: VisibilityFilterState) => state;
