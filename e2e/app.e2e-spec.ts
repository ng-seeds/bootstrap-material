import { AppNamePage } from './app.po';

describe('app-name App', () => {
  let page: AppNamePage;

  beforeEach(() => {
    page = new AppNamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
