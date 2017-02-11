import { AngularHTTPAsyncPage } from './app.po';

describe('angular-http-async App', function() {
  let page: AngularHTTPAsyncPage;

  beforeEach(() => {
    page = new AngularHTTPAsyncPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
