import { BibhavaPage } from './app.po';

describe('bibhava App', function() {
  let page: BibhavaPage;

  beforeEach(() => {
    page = new BibhavaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
