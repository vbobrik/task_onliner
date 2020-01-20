"use strict";
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const width = 1080;
const height = 1080;

class BasePage {
    // driver = null;
    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            // установить нужное разрешение окна (> 1000px)
            .setChromeOptions(new chrome.Options().addArguments(`window-size=${width},${height}`))
            .build();
    }

    // visit a webpage
    async visit(url) {
        await this.driver.get(url);
    }
    // navigate to webpage
    async navigate(targetUrl) {
        await this.driver.navigate().to(targetUrl)
    }



    // get current title
    async getCurrentTitle() {
        return await this.driver.getTitle();
    }

    // quit current session
    async quit() {
        await this.driver.quit();
    }

    // wait and find a specific element with it's id
    findByCss(css) {
        //  this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return this.driver.findElement(By.css(css));
    }

    // wait and find a specific elements with it's id
     findElementsByCss(css) {
        // await this.driver.wait(until.elementLocated(By.css(css)), 5000, 'Looking for element');
        return  this.driver.findElements(By.css(css));
    }

    // wait and find a specific element with it's name
    async findByName(name) {
        await this.driver.wait(until.elementLocated(By.name(name)), 5000, 'Looking for element');
        return await this.driver.findElement(By.name(name));
    }

    // wait and find a specific element with it's xpath
    findByXpath(xpath) {
        // await this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000, 'Looking for element');
        return this.driver.findElement(By.xpath(xpath));
    }

    // fill input web elements
    async write(el, txt) {
        await el.sendKeys(txt);
    }

    // execute script by driver
    async script(script) {
        await this.driver.executeScript(script);
    }
}

module.exports = BasePage;