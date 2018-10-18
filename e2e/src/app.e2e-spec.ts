import {IndexPage} from './index.po';
import {when} from 'q';
import {browser} from 'protractor';

describe('Index', () => {
  let page: IndexPage;

  beforeEach(() => {
    page = new IndexPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Battle Kittens');
  });

  it('should display the list of kittens', () => {
    page.navigateTo();
    const items = page.getKittenList().$$('ul');
    expect(items.count()).toEqual(10);
  });

  describe('when deleting a kitten', () => {

    it('should remove item from kitten list', () => {
      page.navigateTo();
      let items = page.getKittenList().$$('ul');
      expect(items.count()).toEqual(10);

      page.doPressDeleteOn(items.first());

      items = page.getKittenList().$$('ul');
      expect(items.count()).toEqual(9);
    });

  });

  describe('when clicking edit on a kitten', () => {

    it('should go to details', () => {
      page.navigateTo();
      const items = page.getKittenList().$$('ul');

      page.doPressEditOn(items.first());

      expect(browser.getCurrentUrl()).toContain('detail/1');
    });
  });

});
