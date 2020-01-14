const { By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = height = 1080;

class BasePage {
    constructor() {
        this.driver = new Builder()
        .forBrowser('chrome')
        // установить нужное разрешение окна (> 1000px)
        .setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`))
        .build();
      }

     // visit a webpage
    async visit(url) { // Why we need to REMOVE all "function"words???????
        await this.driver.get(url);
    }

     // get current title
     async currentTitle() {
        return await this.driver.getTitle();
    }

    // quit current session
    async quit() {
        await this.driver.quit();
    }

    // wait and find a specific element with it's id
    async findByCss(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return await this.driver.findElement(By.css(css));
    }

    // wait and find a specific element with it's name
    async findByName(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 5000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    }

      // wait and find a specific element with it's xpath
      async findByXpath(xpath) {
        // await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath));
    }

    // fill input web elements
    async write(el, txt) {
        await el.sendKeys(txt);
    }

    // execute script by driver
    async script(script) {
        await this.executeScript(script);
    }
}

module.exports = BasePage;