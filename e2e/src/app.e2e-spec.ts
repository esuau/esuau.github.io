import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should reroute to /bio', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/bio');
  });

  it('should make bio navlink active', () => {
    page.navigateTo();
    expect(page.getBioNavLink().getAttribute('class')).toContain('active');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
