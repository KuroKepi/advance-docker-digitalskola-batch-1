const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { describe, it, before, after } = require('mocha');

let driver;

describe('SauceDemo Test', function () {
  this.timeout(30000);

  before(async () => {
    let options = new chrome.Options();
    options.addArguments("--headless");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--disable-gpu");

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .usingServer('http://selenium:4444/wd/hub')
      .build();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it('should login successfully', async () => {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.name('user-name')).sendKeys('standard_user');
    await driver.findElement(By.name('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();

    const currentUrl = await driver.getCurrentUrl();
    if (!currentUrl.includes('inventory')) {
      throw new Error(`Expected to be on inventory page but got ${currentUrl}`);
    }
  });
});
