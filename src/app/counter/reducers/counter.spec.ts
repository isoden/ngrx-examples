import { reducer } from './counter';
import { Increment, Decrement } from '../actions/counter';

describe('CounterReducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const result = reducer(undefined, action);

    expect(result).toBe(0);
  });

  describe('INCREMENT', () => {
    it('should increment state', () => {
      const action = new Increment();

      expect(reducer(undefined, action)).toBe(1);
      expect(reducer(1, action)).toBe(2);
    });
  });

  describe('DECREMENT', () => {
    it('should decrement state', () => {
      const action = new Decrement();

      expect(reducer(undefined, action)).toBe(-1);
      expect(reducer(1, action)).toBe(0);
    });
  });
});
