import { TodoApp1Page } from './app.po';

describe('todo-app1 App', () => {
  let page: TodoApp1Page;

  beforeEach(() => {
    page = new TodoApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
