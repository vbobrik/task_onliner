const { Builder, By, Key, until } = require('selenium-webdriver');
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
 
    async getAllElements(elements) {
        const arrayOfElements = [];
        // async  ()=> {
            for (let element of elements) {
                console.log('-------' + await element.getText());
               arrayOfElements.push(element);
            } 
        // }
        // await elements.reduce(async (promise, element) => {
        //     // This line will wait for the last async function to finish.
        //     // The first iteration uses an already resolved Promise
        //     // so, it will immediately continue.
        //     await promise;
        //     const contents = await element.getText();
        //     console.log('contents-------' + contents);
        //     arrayOfElements.push(contents);
        //   }, Promise.resolve());
     
       return arrayOfElements;
    }

    async getPageTitle() {
        return await this.driver.getTitle();
    }
    
    //TODO: get H1 without children!
    async getPageHeader(header = 'h1') {
        //case1
        // return (await this.findByCss(pageHeader)).getText();
        // return await this.findByCss('h1').clone().children().remove().end().text();
        //case3, for case1 too
        return await this.driver.findElement(By.css(header)).getText();
        // console.log(trim($(".in-featuredlisting").contents().not($(".in-featuredlisting").children()).text()));

    }

    // wait and find a specific element with it's id
    async findByCss(css) {
        await  this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return this.driver.findElement(By.css(css));
    }

    // wait and find a specific elements with it's id
     async findElementsByCss(css) {
        await  this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
                return  this.driver.findElements(By.css(css));
    }

    // wait a specific element with it's name
    // async waitCssElementIsVisible(css) {
    //     await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
    //     return this.driver.findElement(By.css(css));
    // }

    // wait and find a specific element with it's xpath
    async findByXpath(xpath) {
        await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'Looking for element');
        return  this.driver.findElement(By.xpath(xpath));
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
            console.log(elements.length);
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