const baseURL = 'http://localhost:4200';

export const navigateTo = () => cy.visit(`${ baseURL }/todos`);

export const createTodos = (...titles: string[]) => {
  titles.forEach(title => {
    cy.get('app-todo-input input').type(title);
    cy.get('app-todo-input button').click();
  });
};

export const toggleComplete = (index: number) => cy.get('app-todo').eq(index).find('input[type="checkbox"]').click();

export const filterTodos = (filter: 'all' | 'active' | 'completed') => {
  const toIndex = {
    all      : 0,
    active   : 1,
    completed: 2,
  };

  cy.get('app-todo-filter button').eq(toIndex[filter]).click();
};

export const assertTodoLength = (expect: number) => cy.get('app-todo').should('have.length', expect);

export const assertTodosStatus = (...completed: boolean[]) => {
  cy.get('app-todo').each(($el, index) => {
    const matcher = completed[index] ? 'be.checked' : 'be.not.checked';

    cy.wrap($el).find('input[type="checkbox"]').should(matcher);
  });
};
