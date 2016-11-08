import { AtcWebsitePage } from './app.po';

describe('atc-website App', function() {
  let page: AtcWebsitePage;

  beforeEach(() => {
    page = new AtcWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
