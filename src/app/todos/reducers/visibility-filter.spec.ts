import { reducer } from './visibility-filter';
import { SetVisibilityFilter } from '../actions/todos';

describe('VisibilitiFilterReducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const result = reducer(undefined, action);

    expect(result).toBe('SHOW_ALL');
  });

  describe('SetVisibilityFilter', () => {
    it('should set new filter', () => {
      const action = new SetVisibilityFilter({ visibilityFilter: 'SHOW_COMPLETED' });
      const result = reducer(undefined, action);

      expect(result).toBe('SHOW_COMPLETED');
    });
  });
});
