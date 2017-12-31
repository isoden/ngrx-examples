import { reducer } from './items';
import { Add, Toggle } from '../actions/todos';

describe('Items', () => {
  const addTodos = (titles: string[]) => {
    const initAction = {} as any;

    return titles.reduce((state, title) => reducer(state, new Add({ title })), reducer(undefined, initAction));
  };

  it('should return default state', () => {
    const action = {} as any;
    const result = reducer(undefined, action);

    expect(result).toMatchSnapshot();
  });

  describe('Add', () => {
    it('should add new todo', () => {
      const state = addTodos(['Learn Angular', 'Learn Zone.js', 'Learn RxJS']);

      expect(state).toMatchSnapshot();
    });
  });

  describe('Toggle', () => {
    it('should toggle completed of todo', () => {
      const state = addTodos(['Learn Angular', 'Learn Zone.js', 'Learn RxJS']);
      const result = reducer(state, new Toggle({ id: 2 }));

      expect(result).toMatchSnapshot();
    });
  });
});
