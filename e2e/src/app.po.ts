import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getBioNavLink(): WebElementPromise {
    const parent = element(by.css('clr-vertical-nav'));
    return parent.all(by.css('a')).first().getWebElement();
  }
}
