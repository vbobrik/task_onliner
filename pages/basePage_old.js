const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = height = 1080;

let Page = function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        // установить нужное разрешение окна (> 1000px)
        .setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`))
        .build();

    // visit a webpage
    this.visit = async function (url) {
        return await this.driver.get(url);
    }

     // get current title
     this.currentTitle = async function () {
        return await this.driver.getTitle();
    }

    // quit current session
    this.quit = async function () {
        return await this.driver.quit();
    }

    // wait and find a specific element with it's id
    this.findByCss = async function (css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return await this.driver.findElement(By.css(css));
    }

    // wait and find a specific element with it's name
    this.findByName = async function (name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 5000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    }

      // wait and find a specific element with it's xpath
      this.findByXpath = async function (xpath) {
        // await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'Looking for element');
        return await this.driver.findElement(By.xpath(xpath));
    }

    // fill input web elements
    this.write = async function (el, txt) {
        return await el.sendKeys(txt);
    }

    // execute script by driver
    this.script = async function (script) {
        return await this.executeScript(script);
    }
}

module.exports = Page;