import {
  navigateTo,
  createTodos,
  toggleComplete,
  filterTodos,
  assertTodoLength,
  assertTodosStatus,
} from '../support/todos.po';

beforeEach(() => {
  navigateTo();
  createTodos('Learn Angular', 'Learn Zone.js', 'learn RxJS');
});

it('should add todos', () => {
  assertTodoLength(3);
});

it('should toggle complete todo', () => {
  toggleComplete(1);
  assertTodosStatus(false, true, false);
});

it('should filter todos', () => {
  toggleComplete(1);

  filterTodos('active');
  assertTodoLength(2);

  filterTodos('completed');
  assertTodoLength(1);
});
