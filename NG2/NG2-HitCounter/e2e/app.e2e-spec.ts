import { NG2HitCounterPage } from './app.po';

describe('ng2-hit-counter App', () => {
  let page: NG2HitCounterPage;

  beforeEach(() => {
    page = new NG2HitCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
