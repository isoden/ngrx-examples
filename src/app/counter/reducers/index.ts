import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCounter from './counter';

export const reducers = fromCounter.reducer;

export interface State {
  counter: fromCounter.CounterState;
}

export const selectCounter = createFeatureSelector<fromCounter.CounterState>('counter');
export const getCounter = createSelector(selectCounter, fromCounter.getCounter);
