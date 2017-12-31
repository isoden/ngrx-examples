import { Action } from '@ngrx/store';
import { VisibilityFilter } from '../models';

export enum TodosActionTypes {
  Add                 = '[Todos] Add',
  Toggle              = '[Todos] Toggle',
  SetVisibilityFilter = '[Todos] Set Visibility Filter',
}

export class Add implements Action {
  readonly type = TodosActionTypes.Add;

  constructor(public payload: { title: string }) {}
}

export class Toggle implements Action {
  readonly type = TodosActionTypes.Toggle;

  constructor(public payload: { id: number }) {}
}

export class SetVisibilityFilter implements Action {
  readonly type = TodosActionTypes.SetVisibilityFilter;

  constructor(public payload: { visibilityFilter: VisibilityFilter }) {}
}

export type TodosActions =
  | Add
  | Toggle
  | SetVisibilityFilter;
