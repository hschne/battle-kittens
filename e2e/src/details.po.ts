import {browser, by, element} from 'protractor';

export class DetailPage {
  navigateTo(id: number) {
    return browser.get(`/detail/${id}`);
  }

  getKittenName() {
    return element(by.id('kittenName'));
  }

  getKittenSpeed() {
    return element(by.id('speed'));
  }

  getKittenStrength() {
    return element(by.id('strength'));
  }

  getKittenCuteness() {
    return element(by.id('cuteness'));
  }

  getKittenBattleScore() {
    return element(by.css('.battlescore'));
  }

  getValidationErrors() {
    return element.all(by.css('.alert'));
  }

  doClickOK() {
    const button = element(by.cssContainingText('button', 'OK'));
    button.click();
  }

  doClickCancel() {
    const button = element(by.cssContainingText('button', 'Cancel'));
    button.click();
  }

}
