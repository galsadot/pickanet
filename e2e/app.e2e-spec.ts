import { PickAnetPage } from './app.po';

describe('pick-anet App', function() {
  let page: PickAnetPage;

  beforeEach(() => {
    page = new PickAnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
