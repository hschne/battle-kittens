import {browser, by, element} from 'protractor';

export class IndexPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getKittenList() {
    return element(by.css('app-list'));
  }

  doPressDeleteOn(item) {
    const deleteLink = item.element(by.cssContainingText('a', 'Delete'));
    deleteLink.click();
  }

  doPressEditOn(item) {
    const deleteLink = item.element(by.cssContainingText('a', 'Edit'));
    deleteLink.click();
  }
}
