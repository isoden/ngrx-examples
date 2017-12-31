import { CounterActions, CounterActionTypes } from '../actions/counter';

export type CounterState = number;
const initialState: CounterState = 0;

export function reducer(state = initialState, action: CounterActions): CounterState {
  switch (action.type) {
    case CounterActionTypes.Increment: return state + 1;
    case CounterActionTypes.Decrement: return state - 1;

    default: return state;
  }
}

export const getCounter = (state: CounterState) => state;
