import { Esuau.Github.IoPage } from './app.po';

describe('esuau.github.io App', () => {
  let page: Esuau.Github.IoPage;

  beforeEach(() => {
    page = new Esuau.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
