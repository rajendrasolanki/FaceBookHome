import { FacebookHomePage } from './app.po';

describe('facebook-home App', () => {
  let page: FacebookHomePage;

  beforeEach(() => {
    page = new FacebookHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
