import { NG2MyFacebookV1Page } from './app.po';

describe('ng2-my-facebook-v1 App', () => {
  let page: NG2MyFacebookV1Page;

  beforeEach(() => {
    page = new NG2MyFacebookV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
