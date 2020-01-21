const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = 1080;
const height = 1080;

class BasePage {
    driver = null;

    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`)) // установить нужное разрешение окна (> 1000px)
            .build();
    }

    async scrollDownHotKeys() {
        await this.driver.findElement(By.css('body')).sendKeys(Key.chord(Key.CONTROL, Key.END));
    }

    async visit(url) {
        await this.driver.get(url);
    }

    async getPageTitle() {
        return await this.driver.getTitle();
    }

    //TODO: get H1 without children!
    async getPageHeader(header = 'h1') {
    //     const sss = await this.driver.findElement(By.css('h1'));

      // const headerDefault =  sss.childNodes[0].nodeValue;
      //   console.log('headerDefault-------' + headerDefault);
      //   return headerDefault;

        //case1
        // return (await this.findByCss(pageHeader)).getText();
        // return await this.findByCss('h1').clone().children().remove().end().text();
        //case3, for case1 too

        //TRUE
        return await this.driver.findElement(By.css(header)).getText();

    }

    // wait and find a specific element with it's id
    async findByCss(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return this.driver.findElement(By.css(css));
    }

    // wait and find a specific elements with it's id
    async findElementsByCss(css) {
        await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return this.driver.findElements(By.css(css));
    }

    // wait a specific element with it's name
    // async waitCssElementIsVisible(css) {
    //     await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
    //     return this.driver.findElement(By.css(css));
    // }

    // wait and find a specific element with it's xpath
    async findByXpath(xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'Looking for element');
        return this.driver.findElement(By.xpath(xpath));
    }

    // fill input web elements
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

    async sortElements(elementLocator) {
        let arrayOfElements = [];
        return new Promise(resolve => setTimeout(async () => {
            const elements = await this.findElementsByCss(elementLocator);
            for await (let item of elements) {
                let text = await item.getText();
                arrayOfElements.push(text);
            }
            return resolve(arrayOfElements);
        }, 3000))
    }

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