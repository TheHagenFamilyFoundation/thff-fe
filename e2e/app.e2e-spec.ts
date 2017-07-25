import { ThffFePage } from './app.po';

describe('thff-fe App', () => {
  let page: ThffFePage;

  beforeEach(() => {
    page = new ThffFePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
