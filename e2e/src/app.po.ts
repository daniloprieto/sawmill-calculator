import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
=======
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
>>>>>>> 187b8624a77749b3165207ceed9d04399a4502e5
  }
}
