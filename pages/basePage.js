const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = 1080;
const height = 1080;
const headerLocator = 'h1';
const bodyLocator = 'body';


class BasePage {
    driver = null;

    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`)) // установить нужное разрешение окна (> 1000px)
            .build();
    }

    // scroll page down
    async scrollDownHotKeys() {
        await this.driver.findElement(By.css(bodyLocator)).sendKeys(Key.chord(Key.CONTROL, Key.END));
    }

    // go to url
    async visit(url) {
        await this.driver.get(url);
    }

    // find a title of the page by css
    async getPageTitle() {
        return await this.driver.getTitle();
    }

    // find a header of the page by css
    async getPageHeader(header = headerLocator) {
        return await this.driver.findElement(By.css(header)).getText();
    }

    // wait and find a specific element by css
    async findByCss(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return this.driver.findElement(By.css(css));
    }

    // wait and find an array of elements by css
    async findElementsByCss(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return this.driver.findElements(By.css(css));
    }

    // wait and find a specific element by xpath
    async findByXpath(xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'Looking for element');
        return this.driver.findElement(By.xpath(xpath));
    }

    // enter smth into input field
    async sendText(element, txt) {
        await this.driver.findElement(By.css(element)).clear();
        await this.driver.findElement(By.css(element)).sendKeys(txt);
    }

    // execute script by driver
    async script(script) {
        await this.driver.executeScript(script);
    }

    // quit current session
    async quit() {
        await this.driver.quit();
    }

    // wait and find an array of elements by css
    async sortElements(elementLocator) {
        let arrayOfElements = [];
        return new Promise(resolve => setTimeout(async () => {
            const elements = await this.findElementsByCss(elementLocator);
            for await (let item of elements) {
                let text = await item.getText();
                arrayOfElements.push(text);
            }
            return resolve(arrayOfElements);
        }, 1500))
    }

    // quit current session
    getNumbersFromArray(array) {
        let newArray = [];
        for (let item of array) {
            let arr = item.split(',');
            arr = arr[0].split(' ');
            newArray.push(Number.parseInt(arr[1]));
        }
        return newArray;
    }
}

module.exports = BasePage;